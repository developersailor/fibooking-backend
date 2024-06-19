import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    description: 'The username of a User',
    example: 'john_doe',
    minLength: 4,
    maxLength: 20,
  })
  username: string;
  @ApiProperty({
    description: 'The email of a User',
    example: 'example@email.com',
  })
  email: string;
  @ApiProperty({
    description: 'The password of a User',
    example: 'password123',
    minLength: 8,
    maxLength: 20,
  })
  password: string;
  @ApiProperty({
    description: 'The date and time the User was created',
    example: new Date(),
  })
  createdAt: Date;
  @ApiProperty({
    description: 'The date and time the User was last updated',
    example: new Date(),
  })
  updatedAt: Date;
}
