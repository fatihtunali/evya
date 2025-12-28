import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

// Core modules
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CreditsModule } from './modules/credits/credits.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { CatalogModule } from './modules/catalog/catalog.module';
import { TradeInModule } from './modules/trade-in/trade-in.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ShippingModule } from './modules/shipping/shipping.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

// Health check
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../../.env'],
    }),

    // Rate limiting
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 10,
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 50,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 200,
      },
    ]),

    // Core
    DatabaseModule,

    // Feature modules
    AuthModule,
    UsersModule,
    CreditsModule,
    CategoriesModule,
    CatalogModule,
    TradeInModule,
    OrdersModule,
    PaymentsModule,
    ShippingModule,
    NotificationsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
