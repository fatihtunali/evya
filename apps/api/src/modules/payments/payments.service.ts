import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async initiate(userId: string, orderId: string, data: any) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, userId, status: 'PENDING' },
    });

    if (!order) {
      throw new NotFoundException('Sipariş bulunamadı');
    }

    const payment = await this.prisma.payment.create({
      data: {
        orderId,
        amount: order.total,
        currency: 'TRY',
        status: 'PENDING',
        provider: data.provider || 'IYZICO',
        installments: data.installments || 1,
      },
    });

    // TODO: Integrate with iyzico/PayTR
    // For now, return mock checkout form
    return {
      paymentId: payment.id,
      checkoutFormContent: '<div>Mock checkout form</div>',
      iframeUrl: `https://sandbox-api.iyzipay.com/checkout/${payment.id}`,
    };
  }

  async callback(data: any) {
    // TODO: Verify callback signature and update payment status
    console.log('Payment callback received:', data);
    return { status: 'ok' };
  }

  async getStatus(userId: string, paymentId: string) {
    const payment = await this.prisma.payment.findFirst({
      where: { id: paymentId, order: { userId } },
      include: { order: true },
    });

    if (!payment) {
      throw new NotFoundException('Ödeme bulunamadı');
    }

    return payment;
  }

  async getInstallmentOptions(amount: number, binNumber?: string) {
    // TODO: Get real installment options from payment provider
    return [
      { installment: 1, totalPrice: amount, installmentPrice: amount },
      { installment: 3, totalPrice: amount * 1.05, installmentPrice: (amount * 1.05) / 3 },
      { installment: 6, totalPrice: amount * 1.1, installmentPrice: (amount * 1.1) / 6 },
      { installment: 9, totalPrice: amount * 1.15, installmentPrice: (amount * 1.15) / 9 },
      { installment: 12, totalPrice: amount * 1.2, installmentPrice: (amount * 1.2) / 12 },
    ];
  }
}
