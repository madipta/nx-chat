import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-main-header',
  template: `
    <div class="flex flex-row items-end py-1 mb-4">
      <h1 class="text-xl font-medium mr-auto">WalahApp</h1>
      <div class="text-sm font-medium text-gray-300">
        <div class="inline-block pr-2 border-r border-green-700 mr-2">
          <svg 
            ng-chat-not-implemented
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="cursor-pointer inline w-5 h-5 mt-1"
            viewBox="0 0 24 24">
            <path d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 6.5 13a6.47 6.47 0 0 0 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z" />
          </svg>
        </div>
        <div class="relative inline-block">
          <svg 
            (tap)="showSubmenu()"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="cursor-pointer inline w-5 h-5"
            viewBox="0 0 36 36">
            <path d="M16 10c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0 3c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
          </svg>
          <div 
            *ngIf="submenuShow"
            (tap)="closeSubmenu()"
            class="fixed top-0 bottom-0 left-0 right-0 bg-green-900 opacity-70 z-20"></div>
          <div 
              *ngIf="submenuShow"
              class="absolute top-0 right-0 bg-gray-100 px-6 py-3 rounded-sm mt-2 mr-2 opacity-90 z-30">
            <a (tap)="logout()" class="text-green-900">Logout</a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row text-sm font-medium text-green-600">
      <svg
        (tap)="menuClick('photo')"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="cursor-pointer inline w-4 h-4"
        viewBox="0 0 20 20">
        <path d="M10 13a3 3 0 1 1 0-6 3 3 0 1 1 0 6zm8-11c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3.17L6.4.65A2.03 2.03 0 0 1 7.88 0h4.24a1.99 1.99 0 0 1 1.47.65L14.83 2H18zm-8 13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z" />
      </svg>
      <div class="flex flex-row w-full text-center">
        <div
          (tap)="menuClick('')"
          [ngClass]="{ 'text-gray-100 border-b-2 border-gray-100': selected == ''}"
          class="cursor-pointer font-semibold mx-2 flex-grow">Chats</div>
        <div 
          (tap)="menuClick('status')"
          [ngClass]="{ 'text-gray-100 border-b-2 border-gray-100': selected == 'status'}"
          class="cursor-pointer font-semibold mx-2 flex-grow">Status</div>
        <div
          (tap)="menuClick('calls')"
          [ngClass]="{ 'text-gray-100 border-b-2 border-gray-100': selected == 'calls'}"
          class="cursor-pointer font-semibold ml-2 flex-grow">Calls</div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() MainMenuSelected = new EventEmitter<string>();
  selected = '';
  submenuShow = false;

  constructor(private authService: AuthService, private router: Router) {}

  menuClick(menu) {
    this.MainMenuSelected.emit(menu);
    if (menu === 'photo') {
      menu = '';
    }
    this.selected = menu;
  }

  showSubmenu() {
    this.submenuShow = true;
  }

  closeSubmenu() {
    this.submenuShow = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
