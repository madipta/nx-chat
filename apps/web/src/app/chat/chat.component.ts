import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
    <app-chat-header></app-chat-header>
    <div class="overflow-x-hidden overflow-y-auto mb-14">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class ChatComponent {
  @HostBinding('className') rootClass = 'relative flex flex-col h-screen bg-gray-200';
}
