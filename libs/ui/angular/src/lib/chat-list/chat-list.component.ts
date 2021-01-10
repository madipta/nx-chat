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
    </ng-chat-activity-list-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatListComponent {
  @HostBinding('className') rootClass =
    'cursor-pointer flex flex-col pb-8 overflow-y-auto';
  @Output() ChatSelected = new EventEmitter<string>();
  @Input() list: ContactDto[] = [];

  select(contact) {
    this.ChatSelected.emit(contact);
  }

  trackByFn(index: number, item: ContactDto) {
    return item.userId;
  }
}
