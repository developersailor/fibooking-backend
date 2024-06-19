import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { ReviewsModule } from './reviews/reviews.module';
import { RoomsModule } from './rooms/rooms.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  controllers: [HotelsController],
  providers: [HotelsService],
  imports: [ReviewsModule, RoomsModule, BookingsModule],
})
export class HotelsModule {}
