import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ng-chat-app-header]',
})
export class AppHeaderDirective  {
  constructor(el: ElementRef) {
    const html = el.nativeElement as HTMLElement;
    html.classList.add(...'flex flex-col flex-nowrap bg-green-800 text-white px-2'.split(' '));
  }
}
