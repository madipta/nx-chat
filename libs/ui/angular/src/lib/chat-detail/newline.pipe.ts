import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newline',
})
export class NewlinePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/\n/g, '<br>');
  }
}
