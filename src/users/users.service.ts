import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password: createUserDto.password,
        createdAt: createUserDto.createdAt,
        updatedAt: createUserDto.updatedAt,
      },
    });
  }
  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  findOneByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username: username },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: id },
      data: {
        username: updateUserDto.username,
        email: updateUserDto.email,
        password: updateUserDto.password,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id: id },
    });
  }
}
