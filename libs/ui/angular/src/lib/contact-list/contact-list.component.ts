import { Component } from '@angular/core';

@Component({
  selector: 'ng-chat-contact-list',
  template: `
    <div class="max-h-screen pb-16 overflow-auto">
      <div
        *ngFor="let contact of contacts"
        class="flex flex-nowrap items-center py-4 border-b border-gray-200 mx-2">
        <div class="w-1/6">
          <img [alt]="contact.name" [src]="contact.photoUrl" class="h-12 w-12 rounded-full mx-auto">
        </div>
        <div class="flex flex-col w-4/6 text-sm mx-3">
          <h3 class="text-gray-600 font-extrabold leading-tight">{{contact.name}}</h3>
          <p class="text-gray-500 whitespace-nowrap overflow-ellipsis overflow-hidden">{{contact.lastMessage}}</p>
        </div>
        <div class="flex flex-col w-1/6 flex-shrink text-center text-xs text-gray-500">
          <div>{{contact.lastActive}}</div>
          <div class="flex justify-center mt-1">
            <span class="bg-green-400 text-white leading-6 px-2 rounded-full">
              {{contact.newMessageCount}}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ContactListComponent {
  contacts = [
    {
      name: 'Vincent Mangano',
      lastActive: 'yesterday',
      newMessageCount: 5,
      photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
      lastMessage: 'Money talks. The more money, the louder it talks.',
    },
    {
      name: 'Carlo Gambino',
      lastActive: 'yesterday',
      newMessageCount: 25,
      photoUrl: 'https://randomuser.me/api/portraits/men/66.jpg',
      lastMessage: 'Everybody you fight is not your enemy and everybody that helps you is not your friend.',
    },
    {
      name: 'Salvatore Gravano',
      lastActive: 'yesterday',
      newMessageCount: 123,
      photoUrl: 'https://randomuser.me/api/portraits/men/79.jpg',
      lastMessage: 'Don\'t ever take sides with anyone against the family.'
    },
    {
      name: 'Giuseppe Masseria',
      lastActive: 'yesterday',
      newMessageCount: 1231,
      photoUrl: 'https://randomuser.me/api/portraits/men/82.jpg',
      lastMessage: 'Blood makes you related. Loyalty makes you family.',
    },
    {
      name: 'Anthony Anastasio',
      lastActive: 'yesterday',
      newMessageCount: 8,
      photoUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
      lastMessage: 'Knowledge will give you power but character will give you respect.',
    },
    {
      name: 'Vincent Gigante',
      lastActive: 'yesterday',
      newMessageCount: 65,
      photoUrl: 'https://randomuser.me/api/portraits/men/40.jpg',
      lastMessage: 'I don\'t trust words, I even question actions but I never doubt patterns',
    },
    {
      name: 'Alessandro Vollero',
      lastActive: 'yesterday',
      newMessageCount: 907,
      photoUrl: 'https://randomuser.me/api/portraits/men/29.jpg',
      lastMessage: 'No one gives it to you. You have to take it.',
    },
    {
      name: 'Charlie Luciano',
      position: 'Lucky',
      lastActive: 'yesterday',
      newMessageCount: 4,
      photoUrl: 'https://randomuser.me/api/portraits/men/71.jpg',
      lastMessage: 'Keep your friends close and your enemy closer..',
    },
  ];
}
