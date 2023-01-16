import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>({
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    });
  app.connectMicroservice(microservice);
  await app.listen(3000);
}
bootstrap();
