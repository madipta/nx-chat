import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-chat-activity-list-item',
  template: `
    <ng-chat-list-item>
      <div start>
        <img
          [alt]="userName"
          [src]="userPhotoUrl"
          loading="lazy"
          width="48"
          height="48"
          class="rounded-full mx-auto">
      </div>
      <div middle>
        <div class="text-sm text-gray-800 font-bold leading-tight whitespace-nowrap overflow-ellipsis overflow-hidden">{{userName}}</div>
        <div class="text-xs text-gray-500 leading-tight whitespace-nowrap overflow-ellipsis overflow-hidden">{{description}}</div>
      </div>
      <div end>
        <ng-content select="[additional]"></ng-content>
      </div>
    </ng-chat-list-item>
  `,
})
export class ActivityListItemComponent {
  @Input() userName = '';
  @Input() userPhotoUrl = '';
  @Input() description = '';
}
