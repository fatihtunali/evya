import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';

@Controller({ path: 'categories', version: '1' })
@ApiTags('Categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: 'Tüm kategorileri listele' })
  async findAll(@Query('parentId') parentId?: string) {
    return this.categoriesService.findAll(parentId);
  }

  @Get(':categoryId')
  @ApiOperation({ summary: 'Kategori detayı' })
  async findById(@Param('categoryId') categoryId: string) {
    return this.categoriesService.findById(categoryId);
  }
}
