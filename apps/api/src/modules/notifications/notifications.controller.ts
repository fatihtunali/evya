import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller({ path: 'notifications', version: '1' })
@ApiTags('Notifications')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  @ApiOperation({ summary: 'Bildirimleri listele' })
  async findAll(
    @Request() req: any,
    @Query('unreadOnly') unreadOnly?: boolean,
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ) {
    return this.notificationsService.findAll(req.user.sub, unreadOnly, page, limit);
  }

  @Post(':notificationId/read')
  @ApiOperation({ summary: 'Bildirimi okundu olarak işaretle' })
  async markAsRead(
    @Request() req: any,
    @Param('notificationId') notificationId: string,
  ) {
    return this.notificationsService.markAsRead(req.user.sub, notificationId);
  }

  @Post('read-all')
  @ApiOperation({ summary: 'Tüm bildirimleri okundu olarak işaretle' })
  async markAllAsRead(@Request() req: any) {
    return this.notificationsService.markAllAsRead(req.user.sub);
  }
}
