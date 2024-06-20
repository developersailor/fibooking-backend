import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { ReviewsModule } from './reviews/reviews.module';
import { RoomsModule } from './rooms/rooms.module';
import { BookingsModule } from './bookings/bookings.module';
import { RoomsController } from './rooms/rooms.controller';
import { ReviewsController } from './reviews/reviews.controller';
import { BookingsController } from './bookings/bookings.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [
    HotelsController,
    RoomsController,
    ReviewsController,
    BookingsController,
  ],
  providers: [HotelsService, PrismaService],
  imports: [ReviewsModule, RoomsModule, BookingsModule, PrismaModule],
})
export class HotelsModule {}
