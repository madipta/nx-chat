import { Component, HostBinding, Input } from '@angular/core';
import { Status } from './status';

@Component({
  selector: 'ng-chat-statuses',
  template: `
    <ng-chat-activity-list-item [contact]="me">
    </ng-chat-activity-list-item>
    <ng-chat-status-group title="Recent updates" [users]="recent"></ng-chat-status-group>
    <ng-chat-status-group title="Viewed updates" [users]="viewed"></ng-chat-status-group>
    <ng-chat-status-group title="Muted updates" [users]="muted"></ng-chat-status-group>
  `,
})
export class StatusesComponent {
  @HostBinding('className') rootClass = 'flex flex-col w-full max-w-md mx-auto';
  @Input() me: Status;
  @Input() recent: Status[];
  @Input() viewed: Status[];
  @Input() muted: Status[];
}
