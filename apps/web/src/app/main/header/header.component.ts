import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-main-header',
  template: `
    <ng-chat-header>
      <div class="flex flex-row items-end py-1 mb-4">
        <h1 class="text-xl font-medium mr-auto">WalahApp</h1>
        <ul class="text-sm font-medium text-gray-300">
          <li class="inline-block pr-2 border-r border-green-700 mr-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="cursor-pointer inline w-5 h-5 mt-1"
              viewBox="0 0 24 24">
              <path d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 6.5 13a6.47 6.47 0 0 0 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z" />
            </svg>
          </li>
          <li class="inline-block">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="cursor-pointer inline w-5 h-5"
              viewBox="0 0 36 36">
              <path d="M16 10c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0 3c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
            </svg>
          </li>
        </ul>
      </div>
      <div class="flex flex-row text-sm font-medium text-green-600">
        <svg
          (click)="menuClick('photo')"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="cursor-pointer inline w-4 h-4"
          viewBox="0 0 20 20">
          <path d="M10 13a3 3 0 1 1 0-6 3 3 0 1 1 0 6zm8-11c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3.17L6.4.65A2.03 2.03 0 0 1 7.88 0h4.24a1.99 1.99 0 0 1 1.47.65L14.83 2H18zm-8 13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z" />
        </svg>
        <div class="flex flex-row w-full text-center">
          <div
            (click)="menuClick('')"
            [ngClass]="{ 'text-gray-100 border-b-2 border-gray-100': selected == ''}"
            class="cursor-pointer mx-2 flex-grow">Chats</div>
          <div 
            (click)="menuClick('status')"
            [ngClass]="{ 'text-gray-100 border-b-2 border-gray-100': selected == 'status'}"
            class="cursor-pointer mx-2 flex-grow">Status</div>
          <div
            (click)="menuClick('calls')"
            [ngClass]="{ 'text-gray-100 border-b-2 border-gray-100': selected == 'calls'}"
            class="cursor-pointer ml-2 flex-grow">Calls</div>
        </div>
      </div>
    </ng-chat-header>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() select = new EventEmitter<string>();
  selected = '';

  menuClick(menu) {
    this.select.emit(menu);
    if (menu === 'photo') {
      menu = '';
    }
    this.selected = menu;
  }
}
