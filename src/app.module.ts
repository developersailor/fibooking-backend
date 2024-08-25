import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { LocalStrategy } from './auth/local.strategy';
import { PrismaModule } from './prisma/prisma.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    PrismaModule,

  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    LocalStrategy,
  ],
  exports: [PrismaModule, LocalStrategy, JwtModule],
})
export class AppModule {}
