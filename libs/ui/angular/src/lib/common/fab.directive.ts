import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ng-chat-fab]'
})
export class FabDirective {
  constructor(el: ElementRef) {
    const html = el.nativeElement as HTMLElement;
    html.classList.add(...'absolute bottom-0 right-0 cursor-pointer p-3 mr-5 mb-3 bg-green-500 transition hover:bg-green-600 text-gray-200 border-4 border-gray-100 rounded-full shadow-lg'.split(' '));
  }
}
