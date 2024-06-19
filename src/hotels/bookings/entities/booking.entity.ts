import { Hotel } from '@prisma/client';

export class Booking {
  id: number;
  hotelId: number;
  roomId: number;
  checkIn: Date;
  checkOut: Date;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  hotel?: Hotel;
}
