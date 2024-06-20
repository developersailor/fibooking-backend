import { Room } from 'src/hotels/rooms/entities/room.entity';

export class Booking {
  id: number;
  hotelId: number;
  roomId: number;
  checkIn: Date;
  checkOut: Date;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  room: Room;
}
