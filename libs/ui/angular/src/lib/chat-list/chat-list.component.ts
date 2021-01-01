import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'ng-chat-list',
  template: `
    <div
      *ngFor="let chat of list; odd as isOdd"
      (tap)="select(chat)"
      class="cursor-pointer flex flex-nowrap items-center justify-center py-3 border-b border-gray-100">
      <div class="flex-none">
        <img
          [alt]="chat.name"
          [src]="chat.photoUrl"
          loading="lazy"
          width="48"
          height="48"
          class="rounded-full mx-auto" />
      </div>
      <div class="w-7/12 flex flex-col mx-3">
        <h3 class="text-sm text-gray-800 font-bold leading-tight whitespace-nowrap overflow-ellipsis overflow-hidden">
          {{ chat.name }}
        </h3>
        <p class="text-xs text-gray-500 leading-tight whitespace-nowrap overflow-ellipsis overflow-hidden">
          {{ chat.lastMessage }}
        </p>
      </div>
      <div class="flex-none flex flex-col text-center text-xs text-gray-500">
        <div>{{ chat.lastActive }}</div>
        <div class="flex justify-center mt-1">
          <span class="bg-green-400 text-white leading-6 px-2 rounded-full">
            {{ chat.newMessageCount }}
          </span>
        </div>
      </div>
    </div>
  `,
})
export class ChatListComponent {
  @HostBinding('className') rootClass = 'flex flex-col pb-12 overflow-y-auto';
  @Output() ChatSelected = new EventEmitter<string>();
  @Input() list = [];

  select(chat) {
    this.ChatSelected.emit(chat);
  }
}
