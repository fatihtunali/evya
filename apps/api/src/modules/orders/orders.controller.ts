import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller({ path: 'orders', version: '1' })
@ApiTags('Orders')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Yeni sipariş oluştur' })
  async create(@Request() req: any, @Body() body: any) {
    return this.ordersService.create(req.user.sub, body);
  }

  @Get()
  @ApiOperation({ summary: 'Siparişleri listele' })
  async findAll(
    @Request() req: any,
    @Query('status') status?: string,
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ) {
    return this.ordersService.findAll(req.user.sub, status, page, limit);
  }

  @Get(':orderId')
  @ApiOperation({ summary: 'Sipariş detayı' })
  async findById(@Request() req: any, @Param('orderId') orderId: string) {
    return this.ordersService.findById(req.user.sub, orderId);
  }

  @Post(':orderId/cancel')
  @ApiOperation({ summary: 'Siparişi iptal et' })
  async cancel(@Request() req: any, @Param('orderId') orderId: string) {
    return this.ordersService.cancel(req.user.sub, orderId);
  }
}
