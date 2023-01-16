import { Body, Controller, Get, Post } from '@nestjs/common';
import { Logger } from '@nestjs/microservices/external/kafka.interface';
import { Cron } from '@nestjs/schedule';
import { time } from 'console';
import { get } from 'http';
import { RedisService } from 'src/redis/redis.service';
import { SuitDto } from './suit.dto';

@Controller('suit')
export class SuitController {
  constructor(private readonly redisService: RedisService) {}
  @Post('addSuit')
  addSuit(@Body() suit: SuitDto) {
    this.redisService.add(suit);
  }
  @Get('getAllSuitKeys')
  getKeys() {
    return this.redisService.getAllKeys();
  }

  @Cron('10 * * * * *')
  async checkIfRemainderNeeded() {
    const suit = this.redisService.get('1'); // get all suits and check if we need to remind
    if (
      (await suit).my.first ==
      new Date().getHours() - (await suit).createdDate.getHours()
    ) {
      console.log('CronJob Called', time.toString()); // call here remind method implementations
    }
  }
}
