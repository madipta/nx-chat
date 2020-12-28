import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-chat-list',
  template: `
    <div
      *ngFor="let chat of list;odd as isOdd"
      (click)="select(chat)"
      [ngClass]="{ 'bg-gray-100': isOdd }"
      class="transition hover:bg-gray-200 cursor-pointer flex flex-nowrap items-center justify-center py-3 border-l-2 border-r-2 border-transparent">
      <div class="flex-none">
        <img
          [alt]="chat.name"
          [src]="chat.photoUrl"
          loading="lazy"
          class="h-12 w-12 rounded-full mx-auto">
      </div>
      <div class="w-3/5 flex flex-col flex-nowrap text-sm mx-3">
        <h3 class="text-gray-600 font-extrabold leading-tight whitespace-nowrap overflow-ellipsis overflow-hidden">{{chat.name}}</h3>
        <p class="text-gray-500 whitespace-nowrap overflow-ellipsis overflow-hidden">{{chat.lastMessage}}</p>
      </div>
      <div class="flex-none flex flex-col text-center text-xs text-gray-500">
        <div>{{chat.lastActive}}</div>
        <div class="flex justify-center mt-1">
          <span class="bg-green-400 text-white leading-6 px-2 rounded-full">
            {{chat.newMessageCount}}
          </span>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatListComponent {
  @Input() list = [];

  constructor(private router: Router) { }

  select(chat) {
    this.router.navigate(['/chat'])
  }
}
