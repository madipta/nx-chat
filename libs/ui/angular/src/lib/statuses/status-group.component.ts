import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ng-chat-status-group',
  template: `
    <div class="bg-gray-100 text-gray-600 text-xs font-medium py-1 px-3">
      {{title}}
    </div>
    <ng-chat-activity-list-item
      [contact]="user"
      *ngFor="let user of users">
    </ng-chat-activity-list-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusGroupComponent {
  @Input() title = '';
  @Input() users = [];
}
