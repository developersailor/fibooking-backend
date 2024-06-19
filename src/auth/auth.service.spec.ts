import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;

  const mockUsersService = {
    findOneByUsername: jest.fn((username: string) => {
      if (username === 'validUser') {
        return { username: 'validUser', password: 'validPass', userId: 1 };
      }
      return null;
    }),
    create: jest.fn((user: CreateUserDto) => {
      return { ...user, userId: 1 };
    }),
  };

  const mockJwtService = {
    sign: jest.fn(() => {
      return 'mocked_token';
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return a user if validation is successful', async () => {
      const result = await authService.validateUser('validUser', 'validPass');
      expect(result).toEqual({
        username: 'validUser',
        password: 'validPass',
        userId: 1,
      });
    });

    it('should return null if validation fails', async () => {
      const result = await authService.validateUser(
        'invalidUser',
        'invalidPass',
      );
      expect(result).toBeNull();
    });
  });

  describe('login', () => {
    it('should return a JWT token', async () => {
      const result = await authService.login({
        username: 'validUser',
        userId: 1,
      });
      expect(result).toEqual({ access_token: 'mocked_token' });
      expect(jwtService.sign).toHaveBeenCalledWith({
        username: 'validUser',
        sub: 1,
      });
    });
  });

  describe('register', () => {
    it('should register a new user', async () => {
      const userDto: CreateUserDto = {
        username: 'newUser',
        password: 'newPass',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const result = await authService.register(userDto);
      expect(result).toEqual({
        username: 'newUser',
        password: 'newPass',
        userId: 1,
        email: userDto.email,
        createdAt: userDto.createdAt,
        updatedAt: userDto.updatedAt,
      });
      expect(usersService.create).toHaveBeenCalledWith(userDto);
    });
  });
});
