import { Component } from '@angular/core';

@Component({
  selector: 'nx-chat-root',
  template: `
    <div class="flex flex-col max-h-screen">
      <ng-chat-header></ng-chat-header>
      <ng-chat-contact-list class="flex flex-col pb-12 overflow-y-auto"></ng-chat-contact-list>
    </div>
  `,
})
export class AppComponent {}
