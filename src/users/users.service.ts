import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private id = 1;

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    const target = this.users.find((user) => user.id === id);
    if (!target) {
      throw new NotFoundException();
    }
    return target;
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

  deleteUser(id: number): void {
    const target = this.getUserById(id);
    this.users = this.users.filter((user) => user.id !== target.id);
  }

  updateUserAge(id: number, age: number): User {
    // 指定したidのuserを取得。存在しない場合404エラーを返却。
    const target = this.getUserById(id);
    target.age = age;
    return target;
  }
}
