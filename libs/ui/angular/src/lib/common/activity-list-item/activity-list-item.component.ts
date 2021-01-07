import { Component, Input } from '@angular/core';
import { ContactDto } from '@nx-chat/dto';

@Component({
  selector: 'ng-chat-activity-list-item',
  template: `
    <ng-chat-list-item>
      <div start>
        <img
          [alt]="contact.name"
          [src]="contact.photoUrl"
          loading="lazy"
          width="48"
          height="48"
          class="rounded-full mx-auto">
      </div>
      <div middle>
        <div class="text-sm text-gray-800 font-bold leading-tight whitespace-nowrap overflow-ellipsis overflow-hidden">
          {{contact.name}} <i class="text-xs text-gray-400 font-normal ml-1">~{{contact.username}}</i>
        </div>
        <div class="text-xs text-gray-500 leading-tight whitespace-nowrap overflow-ellipsis overflow-hidden">{{contact.lastMessage}}</div>
      </div>
      <div end>
        <ng-content select="[additional]"></ng-content>
      </div>
    </ng-chat-list-item>
  `,
})
export class ActivityListItemComponent {
  @Input() contact: ContactDto;
}
