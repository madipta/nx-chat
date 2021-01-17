import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { ContactDto } from '@nx-chat/dto';

@Component({
  selector: 'ng-chat-list',
  template: `
    <ng-chat-activity-list-item
      (tap)="select(contact)"
      [contact]="contact"
      *ngFor="let contact of list; trackBy: trackByFn">
      <div additional>
        <span 
          *ngIf="contact.newMessageCount"
          ng-chat-count-pill
          class="bg-green-500 text-white font-medium">
          {{contact.newMessageCount}}
        </span>
      </div>
    </ng-chat-activity-list-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatListComponent {
  @HostBinding('className') rootClass =
    'cursor-pointer max-w-xl flex flex-col pb-8 overflow-y-auto mx-auto';
  @Output() ChatSelected = new EventEmitter<string>();
  @Input() list: ContactDto[] = [];

  select(contact) {
    this.ChatSelected.emit(contact);
  }

  trackByFn(index: number, item: ContactDto) {
    return item.userId;
  }
}
