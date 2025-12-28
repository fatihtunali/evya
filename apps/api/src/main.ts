import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security
  app.use(helmet());

  // CORS
  app.enableCors({
    origin: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3101'],
    credentials: true,
  });

  // API Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'v',
  });

  // Global prefix
  app.setGlobalPrefix('api');

  // Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('Eskisini Ver Yenisini Al API')
    .setDescription('Trade-in platformu API - Eski ürünlerinizi değerlendirin, yeni ürünlerle takas edin')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Auth', 'Kimlik doğrulama işlemleri')
    .addTag('Users', 'Kullanıcı yönetimi')
    .addTag('Credits', 'Kredi ve bakiye işlemleri')
    .addTag('Categories', 'Ürün kategorileri')
    .addTag('Catalog', 'Ürün kataloğu')
    .addTag('TradeIn', 'Trade-in değerleme ve gönderim')
    .addTag('Orders', 'Sipariş yönetimi')
    .addTag('Payments', 'Ödeme işlemleri')
    .addTag('Shipping', 'Kargo işlemleri')
    .addTag('Notifications', 'Bildirimler')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 3100;
  await app.listen(port);

  console.log(`🚀 API running on: http://localhost:${port}`);
  console.log(`📚 Swagger docs: http://localhost:${port}/docs`);
}

bootstrap();
