import { Component, Input } from '@angular/core';
import { Status } from './status';

@Component({
  selector: 'ng-chat-status',
  template: `
    <div class="flex-none">
      <img
        [alt]="user.name"
        [src]="user.photoUrl"
        loading="lazy"
        class="h-12 w-12 rounded-full mx-auto">
    </div>
    <div class="flex flex-col flex-nowrap mx-3">
      <h3 class="text-sm text-gray-800 font-bold leading-tight whitespace-nowrap overflow-ellipsis overflow-hidden">{{user.name}}</h3>
      <p class="text-xs text-gray-500 leading-tight whitespace-nowrap overflow-ellipsis overflow-hidden">{{user.lastDate}}</p>
    </div>
  `,
  host: {
    class: 'flex items-center p-3 border-b border-gray-100'
  }
})
export class StatusComponent {
  @Input() user: Status;
}
