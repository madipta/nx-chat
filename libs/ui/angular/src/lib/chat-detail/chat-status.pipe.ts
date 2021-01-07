import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatStatus',
})
export class ChatStatusPipe implements PipeTransform {
  transform(value: string, args: string): string {
    if (value === args) {
      return 'bg-green-100 float-right';
    }
    return 'float-left bg-white';
  }
}
