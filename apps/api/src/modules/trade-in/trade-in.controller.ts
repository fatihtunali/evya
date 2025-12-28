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
import { TradeInService } from './trade-in.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller({ path: 'trade-ins', version: '1' })
@ApiTags('TradeIn')
export class TradeInController {
  constructor(private readonly tradeInService: TradeInService) {}

  @Get('brands')
  @ApiOperation({ summary: 'Trade-in desteklenen markaları listele' })
  async getBrands(@Query('categoryId') categoryId?: string) {
    return this.tradeInService.getBrands(categoryId);
  }

  @Get('models')
  @ApiOperation({ summary: 'Trade-in desteklenen modelleri listele' })
  async getModels(@Query('brandId') brandId: string) {
    return this.tradeInService.getModels(brandId);
  }

  @Get('valuations')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Kullanıcının değerleme geçmişini listele' })
  async getValuations(@Request() req: any, @Query('status') status?: string) {
    return this.tradeInService.getValuations(req.user.sub, status);
  }

  @Post('valuations')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Yeni değerleme oluştur' })
  async createValuation(@Request() req: any, @Body() body: any) {
    return this.tradeInService.createValuation(req.user.sub, body);
  }

  @Get('valuations/:valuationId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Değerleme detayı' })
  async getValuation(
    @Request() req: any,
    @Param('valuationId') valuationId: string,
  ) {
    return this.tradeInService.getValuation(req.user.sub, valuationId);
  }

  @Post('valuations/:valuationId/accept')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Değerleme teklifini kabul et ve gönderim başlat' })
  async acceptValuation(
    @Request() req: any,
    @Param('valuationId') valuationId: string,
    @Body() body: any,
  ) {
    return this.tradeInService.acceptValuation(req.user.sub, valuationId, body);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Kullanıcının trade-in gönderimlerini listele' })
  async getTradeIns(@Request() req: any, @Query('status') status?: string) {
    return this.tradeInService.getTradeIns(req.user.sub, status);
  }

  @Get(':tradeInId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Trade-in gönderim detayı' })
  async getTradeIn(
    @Request() req: any,
    @Param('tradeInId') tradeInId: string,
  ) {
    return this.tradeInService.getTradeIn(req.user.sub, tradeInId);
  }
}
