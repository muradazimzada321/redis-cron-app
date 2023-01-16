import { CacheModule, CACHE_MANAGER, Inject, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';
import { RedisService } from './redis.service';
@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: () => {
        return {
          store: redisStore,
          host: 'localhost',
          port: 6379,
          ttl: 60 * 3600 * 1000,
        };
      },
    }),
  ],
  providers: [RedisService],
  exports: [CacheModule, RedisService],
})
export class RedisModule {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache) {}
}
