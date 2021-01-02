import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ng-chat-app-body]'
})
export class AppBodyDirective {
  constructor(el: ElementRef) {
    const html = el.nativeElement as HTMLElement;
    html.classList.add(...'overflow-x-hidden overflow-y-auto pb-12'.split(' '));
  }
}
