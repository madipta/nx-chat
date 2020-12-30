import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-chat-status-group',
  template: `
    <div class="bg-gray-100 text-gray-600 text-xs font-medium py-1 px-3">
      {{title}}
    </div>
    <ng-chat-status *ngFor="let user of users" [user]="user"></ng-chat-status>
  `,
})
export class StatusGroupComponent {
  @Input() title = '';
  @Input() users = [];
}
