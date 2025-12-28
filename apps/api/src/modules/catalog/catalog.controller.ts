import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CatalogService } from './catalog.service';

@Controller({ path: 'catalog', version: '1' })
@ApiTags('Catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get('products')
  @ApiOperation({ summary: 'Katalog ürünlerini listele' })
  async findAll(
    @Query('categoryId') categoryId?: string,
    @Query('brandId') brandId?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('condition') condition?: string,
    @Query('search') search?: string,
    @Query('sortBy') sortBy?: string,
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ) {
    return this.catalogService.findAll({
      categoryId,
      brandId,
      minPrice,
      maxPrice,
      condition,
      search,
      sortBy,
      page,
      limit,
    });
  }

  @Get('products/:productId')
  @ApiOperation({ summary: 'Katalog ürün detayı' })
  async findById(@Param('productId') productId: string) {
    return this.catalogService.findById(productId);
  }
}
