import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatStatus',
})
export class ChatStatusPipe implements PipeTransform {
  transform(value: string, args: string): string {
    if (value === args) {
      return 'float-right bg-green-100';
    }
    return 'float-left bg-white';
  }
}
