import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from '@evya/database';

@Injectable()
export class CreditsService {
  constructor(private readonly prisma: PrismaService) {}

  async getBalance(userId: string) {
    const transactions = await this.prisma.creditTransaction.findMany({
      where: { userId },
    });

    let availableBalance = 0;
    let pendingBalance = 0;
    let totalEarned = 0;
    let totalUsed = 0;

    for (const tx of transactions) {
      const amount = Number(tx.amount);
      if (tx.type === 'EARNED') {
        totalEarned += amount;
        availableBalance += amount;
      } else if (tx.type === 'USED') {
        totalUsed += amount;
        availableBalance -= amount;
      } else if (tx.type === 'EXPIRED') {
        availableBalance -= amount;
      } else if (tx.type === 'REFUNDED') {
        availableBalance += amount;
      }
    }

    return {
      availableBalance,
      pendingBalance,
      totalEarned,
      totalUsed,
    };
  }

  async getTransactions(userId: string, type?: string, page = 1, limit = 20) {
    const where: Prisma.CreditTransactionWhereInput = { userId };
    if (type) {
      where.type = type as any;
    }

    const [items, total] = await Promise.all([
      this.prisma.creditTransaction.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.creditTransaction.count({ where }),
    ]);

    return {
      items,
      pagination: {
        page,
        limit,
        totalItems: total,
        totalPages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
    };
  }

  async addCredit(
    userId: string,
    amount: number,
    description: string,
    relatedTradeInId?: string,
  ) {
    return this.prisma.creditTransaction.create({
      data: {
        userId,
        type: 'EARNED',
        amount,
        description,
        relatedTradeInId,
      },
    });
  }

  async useCredit(
    userId: string,
    amount: number,
    description: string,
    relatedOrderId?: string,
  ) {
    return this.prisma.creditTransaction.create({
      data: {
        userId,
        type: 'USED',
        amount,
        description,
        relatedOrderId,
      },
    });
  }
}
