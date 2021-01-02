import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ng-chat-list-item',
  template: `
    <div class="flex items-center py-3 px-2 border-b border-gray-100 overflow-hidden">
      <div class="flex-none">
        <ng-content select="[start]"></ng-content>
      </div>
      <div class="flex-grow flex-nowrap flex flex-col w-7/12 mx-3">
        <ng-content select="[middle]"></ng-content>
      </div>
      <div class="flex-none">
        <ng-content select="[end]"></ng-content>
      </div>
    </div>
  `,
})
export class ListItemComponent {
  @HostBinding('className') rootClass = 'flex flex-col w-full max-w-md mx-auto';
}
