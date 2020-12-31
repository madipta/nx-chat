import { Component } from '@angular/core';

@Component({
  selector: 'app-call-list',
  template: `
    <ng-chat-calls></ng-chat-calls>
    <div 
      (tap)="notImplemented()"
      class="absolute bottom-0 right-0 cursor-pointer p-3 mr-5 mb-3 bg-green-500 transition hover:bg-green-600 text-gray-200 border-4 border-gray-100 rounded-full shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="w-6 h-6"
        viewBox="0 0 20 20">
        <path d="M16.23 12.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85a1.99 1.99 0 0 0 .57-1.64l-.29-2.52A2 2 0 0 0 3.76.01H2.03C.9.01-.04.95.03 2.08c.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
      </svg>
    </div>
  `,
  host: {
    class: 'flex flex-col px-2'
  }
})
export class CallListComponent {
  notImplemented() {
    alert('Not Implemented.');
  }
}
