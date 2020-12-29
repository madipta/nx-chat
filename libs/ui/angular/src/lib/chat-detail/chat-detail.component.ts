import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-chat-detail',
  template: `
    <div class="px-2 pt-2 pb-4">
      <div
        *ngFor="let msg of messages;"
        [ngClass]="{ 'bg-green-100 float-right border-green-100': msg.reply }"
        class="flex flex-col w-5/6 bg-white text-sm text-gray-800 px-3 py-1 rounded-md border border-gray-100 shadow-sm mx-2 mb-2">
        <p>{{msg.body}}</p>
        <div class="text-xs text-gray-400 text-right">{{msg.at}}</div>
      </div>
    </div>
  `,
})
export class ChatDetailComponent {
  @Input() messages = [
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      reply: true,
      body: 'some reply ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
  ];
}
