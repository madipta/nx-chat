import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChatMessageDto, UserDto } from '@nx-chat/dto';

@Component({
  selector: 'ng-chat-detail',
  template: `
    <div class="px-3 pt-3">
      <div
        *ngFor="let msg of messages; trackBy: trackByFn"
        [ngClass]="msg.sender.userId | chatStatus:host.userId"
        class="clear-both flex flex-col max-w-xs sm:max-w-md text-sm text-gray-900 px-2 py-1 rounded-md shadow my-1">
        <div class="leading-tight pr-2 break-all" [innerHTML]="msg.message | newline"></div>
        <div class="leading-none tracking-tight font-mono text-xs text-gray-400 text-right ml-6 mt-1">{{msg.at | date:'h:mm a'}}</div>
      </div>
      <div class="h-0 clear-both"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatDetailComponent {
  @Input() host: UserDto;
  @Input() messages: ChatMessageDto[] = [];

  trackByFn(index: number, item: ChatMessageDto) {
    return item.id;
  }
}
