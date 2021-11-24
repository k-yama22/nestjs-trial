import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserAgeValidationPipe } from './pipes/user-age-check-validation.pipe';

import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers(): { id: number; name: string; age: number }[] {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    return this.userService.getUserById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  // @Bodyでrequest.bodyを全取得。
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.userService.createUser(createUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): void {
    return this.userService.deleteUser(id);
  }

  @Patch(':id/age')
  updateUserAge(
    @Param('id', ParseIntPipe) id: number,
    @Body('age', UserAgeValidationPipe) age: number,
  ): User {
    return this.userService.updateUserAge(id, age);
  }
}
