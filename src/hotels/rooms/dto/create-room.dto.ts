export class CreateRoomDto {
  id: number;
  hotelId: number;
  name: string;
  description: string;
  price: number;
  maxGuests: number;
  isAvailable: boolean;
  pricePerNight: number;
}
