import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  get_users_proc(): { id: string; name: string; age: number }[] {
    const users = [
      { id: '01', name: '山田太郎', age: 24 },
      { id: '02', name: '佐藤次郎', age: 25 },
      { id: '03', name: '伊藤三郎', age: 26 },
      { id: '04', name: '高橋四郎', age: 27 },
    ];
    return users;
  }
}
