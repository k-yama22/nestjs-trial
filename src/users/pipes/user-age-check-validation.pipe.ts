import { BadRequestException, PipeTransform } from '@nestjs/common';

// custom pipeの実装
export class UserAgeValidationPipe implements PipeTransform {
  // custom pipeは'tranform'メソッドが必ず必要
  transform(value: any) {
    if (value < 20) {
      throw new BadRequestException();
    }
    return value;
  }
}
