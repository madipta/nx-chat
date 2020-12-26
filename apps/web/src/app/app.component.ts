import { Component } from '@angular/core';

@Component({
  selector: 'nx-chat-root',
  template: `
    <ng-chat-header></ng-chat-header>
    <ng-chat-contact-list></ng-chat-contact-list>
  `,
})
export class AppComponent {}
