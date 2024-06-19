import { Test, TestingModule } from '@nestjs/testing';
import { BookingsService } from './bookings.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Room } from '../rooms/entities/room.entity';

describe('BookingsService', () => {
  let service: BookingsService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    booking: {
      create: jest.fn().mockResolvedValue({}),
      findMany: jest.fn().mockResolvedValue([]),
      findUnique: jest.fn().mockResolvedValue({}),
      update: jest.fn().mockResolvedValue({}),
      delete: jest.fn().mockResolvedValue({}),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<BookingsService>(BookingsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a booking', async () => {
      const createBookingDto: CreateBookingDto = {
        id: 1,
        userId: 1,
        username: 'user1',
        hotelId: 1,
        roomId: 1,
        guestName: 'Guest',
        guestEmail: 'guest@example.com',
        guestPhone: '123456789',
        checkIn: new Date(),
        checkOut: new Date(),
        room: new Room(),
      };

      await service.create(createBookingDto);
      expect(prismaService.booking.create).toHaveBeenCalledWith({
        data: createBookingDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return an array of bookings', async () => {
      const result = await service.findAll();
      expect(result).toEqual([]);
      expect(prismaService.booking.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a booking by id', async () => {
      const result = await service.findOne(1);
      expect(result).toEqual({});
      expect(prismaService.booking.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('update', () => {
    it('should update a booking by id', async () => {
      const updateBookingDto: UpdateBookingDto = {
        checkIn: new Date(),
        checkOut: new Date(),
        guestName: 'Updated Guest',
        guestEmail: 'updated@example.com',
        guestPhone: '987654321',
        id: 1,
      };

      await service.update(1, updateBookingDto);
      expect(prismaService.booking.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateBookingDto,
      });
    });
  });

  describe('remove', () => {
    it('should delete a booking by id', async () => {
      await service.remove(1);
      expect(prismaService.booking.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });
});
