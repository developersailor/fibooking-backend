import { PartialType } from '@nestjs/swagger';
import { CreateBookingDto } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  id: number;
  checkIn?: Date;
  checkOut?: Date;
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
  room?: any;
}
