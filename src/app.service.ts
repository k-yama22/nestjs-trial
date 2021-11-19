import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): { id: string; name: string; age: number }[] {
    const users = [
      { id: '01', name: '山田太郎', age: 24 },
      { id: '02', name: '佐藤次郎', age: 25 },
      { id: '03', name: '伊藤三郎', age: 26 },
      { id: '04', name: '高橋四郎', age: 27 },
      { id: '05', name: '茂野五郎', age: 28 },
    ];
    return users;
  }
}
