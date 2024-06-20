export class CreateBookingDto {
  id: number;
  userId: number;
  username: string;
  hotelId: number;
  roomId: number;
  checkIn: Date;
  checkOut: Date;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
}
