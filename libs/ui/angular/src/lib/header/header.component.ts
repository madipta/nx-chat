import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ng-chat-header',
  template: `<ng-content></ng-content>`,
})
export class HeaderComponent {
  @HostBinding('className') rootClass = 'flex flex-col flex-nowrap bg-green-800 text-white px-2 border-b-2 border-green-700';
}
