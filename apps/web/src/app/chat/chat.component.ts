import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
    <app-chat-header></app-chat-header>
    <div class="overflow-y-auto mb-14">
      <router-outlet></router-outlet>
    </div>
  `,
  host: {
    class: 'relative flex flex-col h-screen bg-gray-200',
  },
})
export class ChatComponent {}
