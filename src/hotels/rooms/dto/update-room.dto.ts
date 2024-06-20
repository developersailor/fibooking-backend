import { PartialType } from '@nestjs/swagger';
import { CreateRoomDto } from './create-room.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
  id: number;
  name?: string;
  description?: string;
  price?: number;
  maxGuests?: number;
  isAvailable?: boolean;
  pricePerNight?: number;
}
