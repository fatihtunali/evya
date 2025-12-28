import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller({ path: 'users', version: '1' })
@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @ApiOperation({ summary: 'Mevcut kullanıcı bilgilerini getir' })
  async getCurrentUser(@Request() req: any) {
    return this.usersService.findById(req.user.sub);
  }

  @Put('me')
  @ApiOperation({ summary: 'Kullanıcı bilgilerini güncelle' })
  async updateCurrentUser(@Request() req: any, @Body() body: any) {
    return this.usersService.update(req.user.sub, body);
  }

  @Get('me/addresses')
  @ApiOperation({ summary: 'Kullanıcı adreslerini listele' })
  async getAddresses(@Request() req: any) {
    return this.usersService.getAddresses(req.user.sub);
  }

  @Post('me/addresses')
  @ApiOperation({ summary: 'Yeni adres ekle' })
  async addAddress(@Request() req: any, @Body() body: any) {
    return this.usersService.addAddress(req.user.sub, body);
  }

  @Put('me/addresses/:addressId')
  @ApiOperation({ summary: 'Adresi güncelle' })
  async updateAddress(
    @Request() req: any,
    @Param('addressId') addressId: string,
    @Body() body: any,
  ) {
    return this.usersService.updateAddress(req.user.sub, addressId, body);
  }

  @Delete('me/addresses/:addressId')
  @ApiOperation({ summary: 'Adresi sil' })
  async deleteAddress(
    @Request() req: any,
    @Param('addressId') addressId: string,
  ) {
    await this.usersService.deleteAddress(req.user.sub, addressId);
    return { message: 'Adres silindi' };
  }
}
