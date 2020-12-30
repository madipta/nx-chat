import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-chat-detail',
  template: `
    <div class="bg-gray-50 px-2 pt-2 pb-12">
      <div
        *ngFor="let msg of messages;"
        [ngClass]="{ 'bg-green-100 float-right border-green-100': msg.reply, 'float-left': !msg.reply }"
        class="clear-both flex flex-col max-w-sm bg-white text-sm text-gray-800 px-3 py-1 rounded-md border border-gray-100 shadow-sm mx-2 mb-2">
        <p>{{msg.body}}</p>
        <div class="text-xs text-gray-400 text-right ml-12">{{msg.at}}</div>
      </div>
      <div class="clear-both"></div>
    </div>
  `,
})
export class ChatDetailComponent {
  @Input() messages = [
    {
      body: 'some looooooooooooooooooooooooooooooooooooooong message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'hmm',
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
      body: 'some sample message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      reply: true,
      body: 'some reply message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      reply: true,
      body: 'some message ...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: 'lorem ipsum apalah apa kek iyalah iya dong ada deh ada aja...',
      date: 'yesterday',
      at: '1:49 PM',
    },
    {
      body: `
        bla bla...bla bla...bla bla...bla bla...bla bla...bla 
        bla...bla bla...bla bla...bla bla...bla bla...bla bla...
        bla bla...bla bla...bla bla...bla bla...bla bla...
        bla bla...bla bla...bla bla...bla bla...bla bla...`,
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
      reply: true,
      body: `
        bla bla...bla bla...bla bla...bla bla...bla bla...bla 
        bla...bla bla...bla bla...bla bla...bla bla...bla bla...
        bla bla...bla bla...bla bla...bla bla...bla bla...
        bla bla...bla bla...bla bla...bla bla...bla bla...`,
      date: 'yesterday',
      at: '1:49 PM',
    },
  ];
}
