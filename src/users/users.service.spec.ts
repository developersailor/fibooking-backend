import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create should create a new user', async () => {
    const createUserDto: CreateUserDto = {
      username: 'testUser',
      email: 'test@example.com',
      password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1,
    };

    (prisma.user.create as jest.Mock).mockResolvedValue(createUserDto);

    expect(await service.create(createUserDto)).toBe(createUserDto);
    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password: createUserDto.password,
        createdAt: createUserDto.createdAt,
        updatedAt: createUserDto.updatedAt,
        roleId: createUserDto.roleId,
      },
    });
  });

  // Add more tests for other methods like findAll, findOne, update, remove
});
