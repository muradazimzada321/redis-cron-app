import {
  CacheModule,
  CacheModuleOptions,
  Logger,
  Module,
} from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { RedisService } from 'src/redis/redis.service';
import { SuitController } from './suit.controller';
import { SuitService } from './suit.service';
@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [SuitController],
  providers: [Logger, SuitService, RedisService],
  exports: [Logger],
})
export class SuitModule {}
