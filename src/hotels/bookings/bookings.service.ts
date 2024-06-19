import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookingsService {
  constructor(private prismaService: PrismaService) {}
  create(createBookingDto: CreateBookingDto) {
    this.prismaService.booking.create({
      data: {
        userId: createBookingDto.userId,
        username: createBookingDto.username,
        updatedAt: createBookingDto.checkOut,
        createdAt: createBookingDto.checkIn,
        checkIn: createBookingDto.checkIn,
        checkOut: createBookingDto.checkOut,
        hotelId: createBookingDto.hotelId,
        roomId: createBookingDto.roomId,
        guestName: createBookingDto.guestName,
        guestEmail: createBookingDto.guestEmail,
        guestPhone: createBookingDto.guestPhone,
      },
    });
  }

  findAll() {
    this.prismaService.booking.findMany();
  }

  findOne(id: number) {
    this.prismaService.booking.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    this.prismaService.booking.update({
      where: {
        id: id,
      },
      data: {
        checkIn: updateBookingDto.checkIn,
        checkOut: updateBookingDto.checkOut,
        guestName: updateBookingDto.guestName,
        guestEmail: updateBookingDto.guestEmail,
        guestPhone: updateBookingDto.guestPhone,
      },
    });
  }

  remove(id: number) {
    this.prismaService.booking.delete({
      where: {
        id: id,
      },
    });
  }
}
