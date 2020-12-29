import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
    <app-chat-header></app-chat-header>
    <div class="overflow-y-auto">
      <router-outlet></router-outlet>
    </div>
  `,
  host: {
    class: 'relative flex flex-col h-screen bg-gray-100',
  },
})
export class ChatComponent {}
