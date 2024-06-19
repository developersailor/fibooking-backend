import { Test, TestingModule } from '@nestjs/testing';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Room } from '../rooms/entities/room.entity';
import { Booking } from '@prisma/client';

describe('BookingsController', () => {
  let controller: BookingsController;
  let service: BookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingsController],
      providers: [
        {
          provide: BookingsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<BookingsController>(BookingsController);
    service = module.get<BookingsService>(BookingsService);
  });

  describe('create', () => {
    it('should create a new booking', async () => {
      const createBookingDto: CreateBookingDto = {
        id: 1,
        userId: 1,
        username: 'JohnDoe',
        hotelId: 1,
        roomId: 1,
        checkIn: new Date(),
        checkOut: new Date(),
        guestName: 'John Doe',
        guestEmail: 'johndoe@example.com',
        guestPhone: '1234567890',
        room: new Room(),
      };

      const createdBooking = {
        id: 1,
        ...createBookingDto,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'create').mockResolvedValue(createdBooking);

      await expect(controller.create(createBookingDto)).resolves.toEqual(
        createdBooking,
      );
      expect(service.create).toHaveBeenCalledWith(createBookingDto);
    });
  });

  describe('findAll', () => {
    it('should return all bookings', async () => {
      const bookings: Booking[] = [
        {
          id: 123,
          userId: 1,
          username: 'JohnDoe',
          hotelId: 1,
          roomId: 1,
          checkIn: new Date(),
          checkOut: new Date(),
          guestName: 'John Doe',
          guestEmail: 'johndoe@example.com',
          guestPhone: '1234567890',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue();

      await expect(controller.findAll()).resolves.toEqual(bookings);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a booking by ID', async () => {
      const bookingId = 123;
      const booking = {
        id: 123,
        userId: 1,
        username: 'JohnDoe',
        hotelId: 1,
        roomId: 1,
        checkIn: new Date(),
        checkOut: new Date(),
        guestName: 'John Doe',
        guestEmail: 'johndoe@example.com',
        guestPhone: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'findOne').mockResolvedValue(booking);

      await expect(controller.findOne(bookingId)).resolves.toEqual(booking);
      expect(service.findOne).toHaveBeenCalledWith(bookingId);
    });
  });

  describe('update', () => {
    it('should update a booking by ID', async () => {
      const bookingId = 123;
      const updateBookingDto: UpdateBookingDto = {
        checkIn: new Date(),
        checkOut: new Date(),
        guestName: 'Updated Guest',
        guestEmail: 'updated@example.com',
        guestPhone: '9876543210',
        id: 0,
      };

      const updatedBooking = {
        id: bookingId,
        userId: 1,
        username: 'JohnDoe',
        hotelId: 1,
        roomId: 1,
        checkIn: new Date(),
        checkOut: new Date(),
        guestName: 'Updated Guest',
        guestEmail: 'updated@example.com',
        guestPhone: '9876543210',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'update').mockResolvedValue(updatedBooking);

      await expect(
        controller.update(bookingId, updateBookingDto),
      ).resolves.toEqual(updatedBooking);
      expect(service.update).toHaveBeenCalledWith(bookingId, updateBookingDto);
    });
  });

  describe('remove', () => {
    it('should remove a booking by ID', async () => {
      const bookingId = 123;

      jest.spyOn(service, 'remove').mockResolvedValue(undefined);

      await expect(controller.remove(bookingId)).resolves.toBeUndefined();
      expect(service.remove).toHaveBeenCalledWith(bookingId);
    });
  });
});
let controller: BookingsController;
let service: BookingsService;

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    controllers: [BookingsController],
    providers: [
      {
        provide: BookingsService,
        useValue: {
          create: jest.fn(),
          findAll: jest.fn(),
          findOne: jest.fn(),
          update: jest.fn(),
          remove: jest.fn(),
        },
      },
    ],
  }).compile();

  controller = module.get<BookingsController>(BookingsController);
  service = module.get<BookingsService>(BookingsService);
});

describe('create', () => {
  it('should create a new booking', async () => {
    const createBookingDto: CreateBookingDto = {
      userId: 1,
      username: 'JohnDoe',
      hotelId: 1,
      roomId: 1,
      checkIn: new Date(),
      checkOut: new Date(),
      guestName: 'John Doe',
      guestEmail: 'johndoe@example.com',
      guestPhone: '1234567890',
      room: new Room(),
    };

    const createdBooking = {
      id: 123,
      ...createBookingDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'create').mockResolvedValue(createdBooking);

    await expect(controller.create(createBookingDto)).resolves.toEqual(
      createdBooking,
    );
    expect(service.create).toHaveBeenCalledWith(createBookingDto);
  });
});

describe('findAll', () => {
  it('should return all bookings', async () => {
    const bookings = [
      {
        id: 123,
        userId: 1,
        username: 'JohnDoe',
        hotelId: 1,
        roomId: 1,
        checkIn: new Date(),
        checkOut: new Date(),
        guestName: 'John Doe',
        guestEmail: 'johndoe@example.com',
        guestPhone: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    jest.spyOn(service, 'findAll').mockResolvedValue(bookings);

    await expect(controller.findAll()).resolves.toEqual(bookings);
    expect(service.findAll).toHaveBeenCalled();
  });
});

describe('findOne', () => {
  it('should return a booking by ID', async () => {
    const bookingId = 123;
    const booking = {
      id: 123,
      userId: 1,
      username: 'JohnDoe',
      hotelId: 1,
      roomId: 1,
      checkIn: new Date(),
      checkOut: new Date(),
      guestName: 'John Doe',
      guestEmail: 'johndoe@example.com',
      guestPhone: '1234567890',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'findOne').mockResolvedValue(booking);

    await expect(controller.findOne(bookingId)).resolves.toEqual(booking);
    expect(service.findOne).toHaveBeenCalledWith(bookingId);
  });
});

describe('update', () => {
  it('should update a booking by ID', async () => {
    const bookingId = 123;
    const updateBookingDto: UpdateBookingDto = {
      checkIn: new Date(),
      checkOut: new Date(),
      guestName: 'Updated Guest',
      guestEmail: 'updated@example.com',
      guestPhone: '9876543210',
      id: 0,
    };

    const updatedBooking = {
      id: bookingId,
      userId: 1,
      username: 'JohnDoe',
      hotelId: 1,
      roomId: 1,
      checkIn: new Date(),
      checkOut: new Date(),
      guestName: 'Updated Guest',
      guestEmail: 'updated@example.com',
      guestPhone: '9876543210',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'update').mockResolvedValue(updatedBooking);

    await expect(
      controller.update(bookingId, updateBookingDto),
    ).resolves.toEqual(updatedBooking);
    expect(service.update).toHaveBeenCalledWith(bookingId, updateBookingDto);
  });
});

describe('remove', () => {
  it('should remove a booking by ID', async () => {
    const bookingId = 123;

    jest.spyOn(service, 'remove').mockResolvedValue(
      service.remove(bookingId),

    );
  });
});
