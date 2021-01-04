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
    <ng-chat-activity-list-item
    (tap)="select(chat)"
      [userName]="chat.name"
      [userPhotoUrl]="chat.photoUrl"
      [description]="chat.lastMessage"
      *ngFor="let chat of list">
      <!-- <div additional class="flex-none flex flex-col text-center text-xs text-gray-500">
        <div>{{ chat.lastActive }}</div>
        <div class="flex justify-center mt-1">
          <span class="bg-green-400 text-white leading-6 px-2 rounded-full">
            {{ chat.newMessageCount }}
          </span>
        </div>
      </div> -->
    </ng-chat-activity-list-item>
  `,
})
export class ChatListComponent {
  @HostBinding('className') rootClass = 'cursor-pointer flex flex-col pb-8 overflow-y-auto';
  @Output() ChatSelected = new EventEmitter<string>();
  @Input() list = [];

  select(chat) {
    this.ChatSelected.emit(chat);
  }
}
