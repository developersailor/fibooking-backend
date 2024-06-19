import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth/jwt-auth.guard';
import { ExecutionContext } from '@nestjs/common';

describe('AppController', () => {
  let appController: AppController;
  let authService: AuthService;

  const mockAuthService = {
    login: jest.fn(() => {
      return { access_token: 'mocked_token' };
    }),
    register: jest.fn((user) => {
      return { user };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    })
      .overrideGuard(LocalAuthGuard)
      .useValue({
        canActivate: jest.fn((context: ExecutionContext) => {
          const request = context.switchToHttp().getRequest();
          request.user = { username: 'testuser' };
          return true;
        }),
      })
      .overrideGuard(JwtAuthGuard)
      .useValue({
        canActivate: jest.fn((context: ExecutionContext) => {
          const request = context.switchToHttp().getRequest();
          request.user = { username: 'testuser' };
          return true;
        }),
      })
      .compile();

    appController = module.get<AppController>(AppController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  describe('login', () => {
    it('should return an access token', async () => {
      const result = await appController.login({
        user: { username: 'testuser' },
      });
      expect(result).toEqual({ access_token: 'mocked_token' });
      expect(authService.login).toHaveBeenCalledWith({ username: 'testuser' });
    });
  });

  describe('getProfile', () => {
    it('should return the user profile', () => {
      const result = appController.getProfile({
        user: { username: 'testuser' },
      });
      expect(result).toEqual({ username: 'testuser' });
    });
  });

  describe('register', () => {
    it('should register a new user', async () => {
      const result = await appController.register({
        user: { username: 'testuser' },
      });
      expect(result).toEqual({ user: { username: 'testuser' } });
      expect(authService.register).toHaveBeenCalledWith({
        username: 'testuser',
      });
    });
  });
});
