import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';
jest.mock('@prisma/client', () => {
  const mPrismaClient = {
    $connect: jest.fn(),
    $disconnect: jest.fn(),
  };
  return { PrismaClient: jest.fn(() => mPrismaClient) };
});

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
