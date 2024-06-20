import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [HotelsController],
  providers: [HotelsService, PrismaService],
  imports: [PrismaModule],
})
export class HotelsModule {}
