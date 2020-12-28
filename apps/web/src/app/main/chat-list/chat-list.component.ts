import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-chat-list',
  template: `
    <div class="pb-12">
      <ng-chat-list [list]="chatList" class="flex flex-col pb-20 overflow-y-auto"></ng-chat-list>
    </div>
    <div 
      (click)="newMessage()"
      class="absolute bottom-0 right-0 cursor-pointer p-3 mr-5 mb-3 bg-green-500 transition hover:bg-green-600 text-gray-200 border-4 border-gray-100 rounded-full shadow-lg">
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="inline w-6 h-6"
        viewBox="0 0 24 24">
        <path d="M17,7H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm0,4H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm2-9H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"/>
      </svg>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatListComponent {
  chatList = [
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

  newMessage() {
    alert('new Message();')
  }
}
