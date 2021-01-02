import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
    <app-chat-header ng-chat-app-header></app-chat-header>
    <div ng-chat-app-body class="mb-14">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class ChatComponent {
  @HostBinding('className') rootClass = 'relative flex flex-col h-screen bg-gray-200';
}
