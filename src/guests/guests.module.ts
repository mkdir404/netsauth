import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestsController } from './guests.controller';
import { GuestsService } from './guests.service';
import { GuestEntity } from './guest.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([GuestEntity])
  ],
  controllers: [GuestsController],
  providers: [GuestsService]
})
export class GuestsModule {}
