import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AuthService } from './auth/auth.service';
describe('AppController', () => {
  let appController: AppController;
  let authService: AuthService;
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AuthService],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
    authService = moduleRef.get<AuthService>(AuthService);
  });

  describe('login', () => {
    it('should return an access token', async () => {
      const mockUser = { username: 'testuser', password: 'testpassword' };
      jest
        .spyOn(authService, 'login')
        .mockResolvedValue({ access_token: 'test_token' });
      const result = await appController.login(mockUser);
      expect(result).toEqual({ access_token: 'test_token' });
    });
  });
});
