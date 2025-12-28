import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ShippingService } from './shipping.service';

@Controller({ path: 'shipping', version: '1' })
@ApiTags('Shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Get('providers')
  @ApiOperation({ summary: 'Kargo firmalarını listele' })
  async getProviders() {
    return this.shippingService.getProviders();
  }

  @Post('calculate')
  @ApiOperation({ summary: 'Kargo ücretini hesapla' })
  async calculateShipping(@Body() body: { addressId: string; items: any[] }) {
    return this.shippingService.calculateShipping(body);
  }

  @Get('tracking/:trackingNumber')
  @ApiOperation({ summary: 'Kargo takibi' })
  async trackShipment(@Param('trackingNumber') trackingNumber: string) {
    return this.shippingService.trackShipment(trackingNumber);
  }

  @Get('dropoff-locations')
  @ApiOperation({ summary: 'Trade-in teslim noktalarını listele' })
  async getDropoffLocations(
    @Query('city') city?: string,
    @Query('lat') lat?: number,
    @Query('lng') lng?: number,
    @Query('radius') radius?: number,
  ) {
    return this.shippingService.getDropoffLocations(city, lat, lng, radius);
  }
}
