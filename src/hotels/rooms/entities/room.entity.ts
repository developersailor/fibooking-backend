import { Booking } from '@prisma/client';

export class Room {
  id: number;
  name: string;
  description: string;
  price: number;
  hotelId: number;
  bookings: Booking[];
}
