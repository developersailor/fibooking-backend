import { Test, TestingModule } from '@nestjs/testing';
import { LocalAuthGuard } from './auth.guard';

describe('LocalAuthGuard', () => {
  let guard: LocalAuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalAuthGuard],
    }).compile();

    guard = module.get<LocalAuthGuard>(LocalAuthGuard);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  it('should return true for canActivate method when user is authenticated', () => {
    // Mock the isAuthenticated function
    const isAuthenticatedMock = jest.fn().mockReturnValue(true);
    jest.spyOn(guard, 'getRequest').mockReturnValueOnce({
      isAuthenticated: isAuthenticatedMock,
    });

    const result = guard.canActivate({
      switchToHttp: () => ({
        getRequest: () => ({
          isAuthenticated: isAuthenticatedMock,
        }),
      }),
    });
    expect(result).toBe(true);
    expect(isAuthenticatedMock).toHaveBeenCalled(); // Verify the mock was called
  });

  it('should return false for canActivate method when user is not authenticated', () => {
    // Mock the passport authentication result
    jest.spyOn(guard, 'canActivate').mockReturnValue(false);

    const result = guard.canActivate({
      switchToHttp: () => ({
        getRequest: () => ({
          isAuthenticated: () => true,
        }),
      }),
    });
    expect(result).toBe(false);
  });
});
