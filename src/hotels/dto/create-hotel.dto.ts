import { IsOptional, IsString, IsJSON } from 'class-validator';

export class CreateHotelDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsJSON()
  images?: Record<string, any>; // Assuming images are stored as JSON

  @IsOptional()
  @IsString()
  location?: string;
}
