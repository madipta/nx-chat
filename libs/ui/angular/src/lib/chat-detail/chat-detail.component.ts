import { Component, Input } from '@angular/core';
import { ChatMessageDto, UserDto } from '@nx-chat/dto';

@Component({
  selector: 'ng-chat-detail',
  template: `
    <div class="px-2 pt-2">
      <div
        *ngFor="let msg of messages;"
        [ngClass]="msg.sender.userId | chatStatus:host.userId"
        class="clear-both flex flex-col max-w-xs sm:max-w-md text-sm text-gray-900 px-2 py-1 rounded-md shadow my-2">
        <p class="pr-2 break-all" [innerHTML]="msg.message | newline"></p>
        <div class="leading-none tracking-tight font-mono text-xs text-gray-400 text-right ml-12 mt-1">{{msg.at}}</div>
      </div>
      <div class="h-0 clear-both"></div>
    </div>
  `,
})
export class ChatDetailComponent {
  @Input() host: UserDto;
  @Input() messages: ChatMessageDto[] = [];
}
