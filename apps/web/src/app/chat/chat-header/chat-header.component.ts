import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  template: `
    <ng-chat-header>
      <div class="flex items-center w-full py-2">
        <div class="flex-none flex-nowrap">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="cursor-pointer inline w-5 h-5 mt-1"
            viewBox="0 0 24 24">
            <path d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 6.5 13a6.47 6.47 0 0 0 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z" />
          </svg>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="cursor-pointer inline w-5 h-5 mt-1"
            viewBox="0 0 24 24">
            <path d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 6.5 13a6.47 6.47 0 0 0 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z" />
          </svg>
        </div>
        <div class="flex flex-col flex-grow mx-3">
          <h2 class="leading-none text-lg font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden">{{title}}</h2>
          <p class="leading-none text-sm text-gray-200 whitespace-nowrap overflow-ellipsis overflow-hidden">{{description}}</p>
        </div>
        <div class="flex-none flex-nowrap">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="cursor-pointer inline w-5 h-5 mt-1"
            viewBox="0 0 24 24">
            <path d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 6.5 13a6.47 6.47 0 0 0 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z" />
          </svg>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="cursor-pointer inline w-5 h-5 mt-1"
            viewBox="0 0 24 24">
            <path d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5a6.5 6.5 0 1 0-13 0A6.5 6.5 0 0 0 6.5 13a6.47 6.47 0 0 0 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z" />
          </svg>
        </div>
      </div>
    </ng-chat-header>
  `,
})
export class ChatHeaderComponent {
  @Input() title = 'xxx';
  @Input() description = 'zzzzzzz';
}
