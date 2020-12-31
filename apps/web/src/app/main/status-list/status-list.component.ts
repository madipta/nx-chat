import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-list',
  template: `
    <ng-chat-statuses [me]="me" [recent]="recent" [viewed]="viewed" [muted]="muted"></ng-chat-statuses>
    <div 
      (tap)="notImplemented()"
      class="absolute bottom-0 right-0 cursor-pointer p-3 mr-5 mb-3 bg-green-500 transition hover:bg-green-600 text-gray-200 border-4 border-gray-100 rounded-full shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="w-6 h-6"
        viewBox="0 0 20 20">
        <path d="M10 13a3 3 0 1 1 0-6 3 3 0 1 1 0 6zm8-11c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3.17L6.4.65A2.03 2.03 0 0 1 7.88 0h4.24a1.99 1.99 0 0 1 1.47.65L14.83 2H18zm-8 13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z" />
      </svg>
    </div>
  `,
  host: {
    class: 'flex flex-col pb-20'
  }
})
export class StatusListComponent {
  me = {
    name: 'Vincent Mangano',
    photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
    lastDate: 'yesterday',
  };

  recent = [
    {
      name: 'Vincent Mangano',
      photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
      lastDate: 'yesterday',
    },
  ];

   viewed = [
    {
      name: 'Vincent Mangano',
      photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
      lastDate: 'yesterday',
    },
    {
      name: 'Vincent Mangano',
      photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
      lastDate: 'yesterday',
    },
  ];

  muted = [
    {
      name: 'Vincent Mangano',
      photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
      lastDate: 'yesterday',
    },
  ];

  notImplemented() {
    alert('Not Implemented.');
  }
}
