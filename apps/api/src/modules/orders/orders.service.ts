import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, data: any) {
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;

    const order = await this.prisma.order.create({
      data: {
        orderNumber,
        userId,
        status: 'PENDING',
        shippingAddressId: data.shippingAddressId,
        billingAddressId: data.billingAddressId,
        subtotal: data.subtotal,
        shippingCost: data.shippingCost || 0,
        couponDiscount: data.couponDiscount || 0,
        tradeInDiscount: data.tradeInDiscount || 0,
        creditUsed: data.creditUsed || 0,
        tax: data.tax || 0,
        total: data.total,
        notes: data.notes,
        items: {
          create: data.items.map((item: any) => ({
            productId: item.productId,
            productName: item.productName,
            productImage: item.productImage,
            productCondition: item.productCondition,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalPrice: item.totalPrice,
          })),
        },
      },
      include: {
        items: true,
        shippingAddress: true,
      },
    });

    await this.prisma.orderTimeline.create({
      data: {
        orderId: order.id,
        status: 'PENDING',
        note: 'Sipariş oluşturuldu',
        actor: 'SYSTEM',
      },
    });

    return order;
  }

  async findAll(userId: string, status?: string, page = 1, limit = 20) {
    const where = {
      userId,
      ...(status && { status: status as any }),
    };

    const [items, total] = await Promise.all([
      this.prisma.order.findMany({
        where,
        include: { items: true },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.order.count({ where }),
    ]);

    return {
      items,
      pagination: {
        page,
        limit,
        totalItems: total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findById(userId: string, orderId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, userId },
      include: {
        items: { include: { product: true } },
        shippingAddress: true,
        billingAddress: true,
        payments: true,
        timeline: { orderBy: { createdAt: 'desc' } },
      },
    });

    if (!order) {
      throw new NotFoundException('Sipariş bulunamadı');
    }

    return order;
  }

  async cancel(userId: string, orderId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, userId, status: 'PENDING' },
    });

    if (!order) {
      throw new NotFoundException('Sipariş bulunamadı veya iptal edilemez');
    }

    await this.prisma.order.update({
      where: { id: orderId },
      data: { status: 'CANCELLED' },
    });

    await this.prisma.orderTimeline.create({
      data: {
        orderId,
        status: 'CANCELLED',
        note: 'Sipariş iptal edildi',
        actor: 'USER',
      },
    });

    return { message: 'Sipariş iptal edildi' };
  }
}
