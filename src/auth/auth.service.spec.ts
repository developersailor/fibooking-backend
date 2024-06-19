import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UsersService, JwtService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('validateUser', () => {
    it('should return user object if username and password are valid', async () => {
      const username = 'testuser';
      const password = 'testpassword';
      const user = {
        id: 1,
        username,
        password,
        email: 'developersailor@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(usersService, 'findOne').mockResolvedValue(user);

      const result = await authService.validateUser(username, password);

      expect(result).toEqual(user);
    });

    it('should return null if username or password is invalid', async () => {
      const username = 'testuser';
      const password = 'testpassword';
      const user = null;

      jest.spyOn(usersService, 'findOne').mockResolvedValue(user);

      const result = await authService.validateUser(username, password);

      expect(result).toBeNull();
    });
  });

  describe('login', () => {
    it('should return a JWT token if user is valid', async () => {
      const user = { id: 1, username: 'testuser', password: 'testpassword' };
      const token = 'jwt_token';

      jest.spyOn(authService, 'validateUser').mockResolvedValue(user);
      jest.spyOn(jwtService, 'sign').mockReturnValue(token);

      const result = await authService.login(user);

      expect(result).toEqual({ access_token: token });
    });

    it('should throw an error if user is invalid', async () => {
      const user = null;

      jest.spyOn(authService, 'validateUser').mockResolvedValue(user);

      await expect(authService.login(user)).rejects.toThrow(
        'UnauthorizedException',
      );
    });
  });
});
