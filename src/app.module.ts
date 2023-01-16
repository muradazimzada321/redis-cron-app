import { CACHE_MANAGER, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuitController } from './suit/suit.controller';
import { SuitService } from './suit/suit.service';
import { SuitModule } from './suit/suit.module';
import { RedisService } from './redis/redis.service';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [SuitModule, RedisModule],
  controllers: [AppController, SuitController],
  providers: [AppService, SuitService, RedisService],
})
export class AppModule {}
