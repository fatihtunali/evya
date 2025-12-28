import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from '@evya/database';

@Injectable()
export class CatalogService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(options: {
    categoryId?: string;
    brandId?: string;
    minPrice?: number;
    maxPrice?: number;
    condition?: string;
    search?: string;
    sortBy?: string;
    page?: number;
    limit?: number;
  }) {
    const { page = 1, limit = 20 } = options;

    const where: Prisma.CatalogProductWhereInput = {
      isActive: true,
    };

    if (options.categoryId) where.categoryId = options.categoryId;
    if (options.brandId) where.brandId = options.brandId;
    if (options.condition) where.condition = options.condition as any;
    if (options.search) {
      where.OR = [
        { name: { contains: options.search } },
        { description: { contains: options.search } },
      ];
    }
    if (options.minPrice || options.maxPrice) {
      where.price = {};
      if (options.minPrice) where.price.gte = options.minPrice;
      if (options.maxPrice) where.price.lte = options.maxPrice;
    }

    const orderBy: Prisma.CatalogProductOrderByWithRelationInput = {};
    switch (options.sortBy) {
      case 'PRICE_ASC':
        orderBy.price = 'asc';
        break;
      case 'PRICE_DESC':
        orderBy.price = 'desc';
        break;
      case 'NEWEST':
        orderBy.createdAt = 'desc';
        break;
      default:
        orderBy.createdAt = 'desc';
    }

    const [items, total] = await Promise.all([
      this.prisma.catalogProduct.findMany({
        where,
        include: {
          brand: true,
          category: true,
          images: { orderBy: { sortOrder: 'asc' } },
        },
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.catalogProduct.count({ where }),
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

  async findById(id: string) {
    const product = await this.prisma.catalogProduct.findUnique({
      where: { id },
      include: {
        brand: true,
        category: true,
        images: { orderBy: { sortOrder: 'asc' } },
      },
    });

    if (!product) {
      throw new NotFoundException('Ürün bulunamadı');
    }

    return product;
  }
}
