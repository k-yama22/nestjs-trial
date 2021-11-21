import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private id = 1;

  getUsers(): { id: number; name: string; age: number }[] {
    const users = [
      { id: 1, name: '山田太郎', age: 24 },
      { id: 2, name: '佐藤次郎', age: 25 },
      { id: 3, name: '伊藤三郎', age: 26 },
      { id: 4, name: '高橋四郎', age: 27 },
      { id: 5, name: '茂野五郎', age: 28 },
    ];
    return users;
  }

  createUser(createUserDto: CreateUserDto): User {
    const { name, age } = createUserDto;
    const user = {
      id: this.id++,
      name,
      age,
    };
    this.users.push(user);
    return user;
  }
}
