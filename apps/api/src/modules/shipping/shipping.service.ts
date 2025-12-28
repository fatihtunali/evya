import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ShippingService {
  constructor(private readonly prisma: PrismaService) {}

  async getProviders() {
    return this.prisma.shippingProvider.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' },
    });
  }

  async calculateShipping(data: { addressId: string; items: any[] }) {
    // TODO: Integrate with real shipping providers
    return [
      {
        providerId: 'yurtici',
        providerName: 'Yurtiçi Kargo',
        price: 29.90,
        estimatedDays: '2-3 iş günü',
      },
      {
        providerId: 'aras',
        providerName: 'Aras Kargo',
        price: 24.90,
        estimatedDays: '3-4 iş günü',
      },
      {
        providerId: 'mng',
        providerName: 'MNG Kargo',
        price: 27.90,
        estimatedDays: '2-3 iş günü',
      },
    ];
  }

  async trackShipment(trackingNumber: string) {
    // TODO: Integrate with real shipping providers
    return {
      trackingNumber,
      status: 'IN_TRANSIT',
      statusDescription: 'Kargo yolda',
      estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      events: [
        {
          date: new Date(),
          status: 'IN_TRANSIT',
          description: 'Kargo transfer merkezinden çıktı',
          location: 'İstanbul Transfer Merkezi',
        },
        {
          date: new Date(Date.now() - 24 * 60 * 60 * 1000),
          status: 'PICKED_UP',
          description: 'Kargo teslim alındı',
          location: 'Satıcı Adresi',
        },
      ],
    };
  }

  async getDropoffLocations(city?: string, lat?: number, lng?: number, radius = 10) {
    const where: any = { isActive: true };

    if (city) {
      where.city = city;
    }

    return this.prisma.dropoffLocation.findMany({
      where,
      orderBy: { name: 'asc' },
      take: 20,
    });
  }
}
