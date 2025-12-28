import { Controller, Get, Query, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CreditsService } from './credits.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller({ path: 'credits', version: '1' })
@ApiTags('Credits')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @Get('balance')
  @ApiOperation({ summary: 'Kredi bakiyesini getir' })
  async getBalance(@Request() req: any) {
    return this.creditsService.getBalance(req.user.sub);
  }

  @Get('transactions')
  @ApiOperation({ summary: 'Kredi işlem geçmişini listele' })
  async getTransactions(
    @Request() req: any,
    @Query('type') type?: string,
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ) {
    return this.creditsService.getTransactions(req.user.sub, type, page, limit);
  }
}
