import { BadRequestException, PipeTransform } from '@nestjs/common';

// custom pipeの実装
export class EventLocationValidationPipe implements PipeTransform {
  // custom pipeは'tranform'メソッドが必ず必要
  transform(value: any) {
    if (value === '東京' || value === '渋谷') {
      throw new BadRequestException();
    }
    return value;
  }
}
