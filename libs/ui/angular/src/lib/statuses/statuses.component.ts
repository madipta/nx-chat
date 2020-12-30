import { Component, Input } from '@angular/core';
import { Status } from './status';

@Component({
  selector: 'ng-chat-statuses',
  template: `
    <ng-chat-status [user]="me"></ng-chat-status>
    <ng-chat-status-group title="Recent updates" [users]="recent"></ng-chat-status-group>
    <ng-chat-status-group title="Viewed updates" [users]="viewed"></ng-chat-status-group>
    <ng-chat-status-group title="Muted updates" [users]="muted"></ng-chat-status-group>
  `,
  host: {
    class: 'flex flex-col w-full max-w-md mx-auto',
  },
})
export class StatusesComponent {
  @Input() me: Status;
  @Input() recent: Status[];
  @Input() viewed: Status[];
  @Input() muted: Status[];
}
