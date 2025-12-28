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
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller({ path: 'payments', version: '1' })
@ApiTags('Payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('initiate')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Ödeme başlat' })
  async initiate(@Request() req: any, @Body() body: any) {
    return this.paymentsService.initiate(req.user.sub, body.orderId, body);
  }

  @Post('callback')
  @ApiOperation({ summary: 'Ödeme callback (webhook)' })
  async callback(@Body() body: any) {
    return this.paymentsService.callback(body);
  }

  @Get(':paymentId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Ödeme durumunu sorgula' })
  async getStatus(@Request() req: any, @Param('paymentId') paymentId: string) {
    return this.paymentsService.getStatus(req.user.sub, paymentId);
  }

  @Get('installment-options')
  @ApiOperation({ summary: 'Taksit seçeneklerini getir' })
  async getInstallmentOptions(
    @Query('amount') amount: number,
    @Query('binNumber') binNumber?: string,
  ) {
    return this.paymentsService.getInstallmentOptions(amount, binNumber);
  }
}
