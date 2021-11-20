import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): { id: number; name: string; age: number }[] {
    return this.appService.getUsers();
  }

  @Post('users')
  @UsePipes(ValidationPipe)
  // @Bodyでrequest.bodyを全取得。
  createTodo(@Body() createUserDto: CreateUserDto): User {
    return this.appService.createUser(createUserDto);
  }
}
