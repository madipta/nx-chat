import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ng-chat-count-pill]',
})
export class CountPillDirective  {
  constructor(el: ElementRef) {
    const html = el.nativeElement as HTMLElement;
    html.style.fontSize = "0.685rem";
    html.classList.add(...'flex-none leading-none text-center px-2 py-1 rounded-full mx-1'.split(' '));
  }
}
