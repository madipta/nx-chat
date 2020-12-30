import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-view',
  template: `
    <div class="max-w-screen-sm pb-12 mx-auto">
      <ng-chat-detail [messages]="messages"></ng-chat-detail>
    </div>
    <div class="absolute bg-gray-100 bottom-0 left-0 right-0">
      <div class="flex w-full max-w-screen-sm px-3 py-2 mx-auto">
        <div class="flex-grow flex items-center bg-white px-3 py-2 rounded-3xl shadow-lg mr-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="none" stroke="#aaa" stroke-width="2"
            class="w-6 h-6"
            viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="13"/><g stroke-linejoin="round" stroke-miterlimit="10"><path d="M10.7 19c1.4 1.2 3.3 2 5.3 2s3.9-.8 5.3-2M12 12v5"/><path d="M20 12v5"/></g>
          </svg>
          <div
            contenteditable="true"
            class="w-full text-gray-500 focus:border-0 focus:outline-none mx-3">Type a Message</div>
        </div>
        <div class="flex-none flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bg-green-700 text-white w-10 h-10 rounded-full shadow-lg"
            viewBox="-4 -3 24 24">
            <path d="M8 11a3 3 0 0 0 3-3V3a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zm5-3V6h-1v1.844c0 1.92-1.282 3.688-3.164 4.071A4.01 4.01 0 0 1 4 8V6H3v2a5.01 5.01 0 0 0 4 4.899V15H5v1h6v-1H9v-2.101A5.01 5.01 0 0 0 13 8z"/>
          </svg>
        </div>
      </div>
    </div>
  `,
})
export class ChatViewComponent {
  messages = [
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
