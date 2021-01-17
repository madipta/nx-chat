import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[ng-chat-not-implemented]'
})
export class NotImplementedDirective {
  @HostListener('tap')
  onClick() {
    alert('Not Implemented!');
  }
}
