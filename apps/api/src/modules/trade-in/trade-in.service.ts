import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class TradeInService {
  constructor(private readonly prisma: PrismaService) {}

  // Brands & Models
  async getBrands(categoryId?: string) {
    return this.prisma.brand.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' },
    });
  }

  async getModels(brandId: string) {
    return this.prisma.deviceModel.findMany({
      where: { brandId, isActive: true },
      include: { variants: true },
      orderBy: { name: 'asc' },
    });
  }

  // Valuations
  async createValuation(userId: string, data: any) {
    // Create trade-in item first
    const tradeInItem = await this.prisma.tradeInItem.create({
      data: {
        userId,
        modelId: data.modelId,
        variantId: data.variantId,
        declaredCondition: data.condition,
        screenCondition: data.screenCondition,
        bodyCondition: data.bodyCondition,
        batteryHealth: data.batteryHealth,
        functionalIssues: data.functionalIssues,
        accessories: data.accessories,
        imei: data.imei,
      },
    });

    // Calculate estimated value based on variant and condition
    const variant = await this.prisma.deviceVariant.findUnique({
      where: { id: data.variantId },
    });

    if (!variant) {
      throw new NotFoundException('Varyant bulunamadı');
    }

    const baseValue = Number(variant.baseTradeInValue);
    let multiplier = 1;

    switch (data.condition) {
      case 'EXCELLENT': multiplier = 1; break;
      case 'GOOD': multiplier = 0.85; break;
      case 'FAIR': multiplier = 0.7; break;
      case 'POOR': multiplier = 0.5; break;
    }

    const estimatedValue = Math.round(baseValue * multiplier);
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 7);

    const valuation = await this.prisma.valuation.create({
      data: {
        userId,
        tradeInItemId: tradeInItem.id,
        status: 'QUOTED',
        estimatedValue,
        minimumValue: Math.round(estimatedValue * 0.9),
        maximumValue: Math.round(estimatedValue * 1.1),
        validUntil,
      },
      include: { tradeInItem: true },
    });

    return valuation;
  }

  async getValuations(userId: string, status?: string) {
    return this.prisma.valuation.findMany({
      where: {
        userId,
        ...(status && { status: status as any }),
      },
      include: { tradeInItem: { include: { model: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getValuation(userId: string, valuationId: string) {
    const valuation = await this.prisma.valuation.findFirst({
      where: { id: valuationId, userId },
      include: { tradeInItem: { include: { model: true, variant: true } } },
    });

    if (!valuation) {
      throw new NotFoundException('Değerleme bulunamadı');
    }

    return valuation;
  }

  async acceptValuation(userId: string, valuationId: string, data: any) {
    const valuation = await this.prisma.valuation.findFirst({
      where: { id: valuationId, userId, status: 'QUOTED' },
    });

    if (!valuation) {
      throw new NotFoundException('Değerleme bulunamadı veya kabul edilemez durumda');
    }

    if (valuation.validUntil < new Date()) {
      throw new BadRequestException('Değerleme süresi dolmuş');
    }

    // Update valuation status
    await this.prisma.valuation.update({
      where: { id: valuationId },
      data: { status: 'ACCEPTED' },
    });

    // Create trade-in
    const tradeIn = await this.prisma.tradeIn.create({
      data: {
        userId,
        valuationId,
        tradeInItemId: valuation.tradeInItemId,
        status: 'CREATED',
        shippingMethod: data.shippingMethod,
        initialOffer: valuation.estimatedValue,
        settlementType: data.settlementType,
        appliedToOrderId: data.applyToOrderId,
      },
      include: {
        valuation: true,
        tradeInItem: { include: { model: true } },
      },
    });

    // Add timeline entry
    await this.prisma.tradeInTimeline.create({
      data: {
        tradeInId: tradeIn.id,
        status: 'CREATED',
        note: 'Trade-in oluşturuldu',
        actor: 'SYSTEM',
      },
    });

    return tradeIn;
  }

  // Trade-ins
  async getTradeIns(userId: string, status?: string) {
    return this.prisma.tradeIn.findMany({
      where: {
        valuation: { userId },
        ...(status && { status: status as any }),
      },
      include: {
        valuation: true,
        tradeInItem: { include: { model: true } },
        timeline: { orderBy: { createdAt: 'desc' } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getTradeIn(userId: string, tradeInId: string) {
    const tradeIn = await this.prisma.tradeIn.findFirst({
      where: {
        id: tradeInId,
        valuation: { userId },
      },
      include: {
        valuation: true,
        tradeInItem: { include: { model: true, variant: true } },
        timeline: { orderBy: { createdAt: 'desc' } },
      },
    });

    if (!tradeIn) {
      throw new NotFoundException('Trade-in bulunamadı');
    }

    return tradeIn;
  }
}
