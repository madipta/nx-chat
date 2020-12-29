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
            class="cursor-pointer inline w-4 h-4 mr-4"
            viewBox="0 0 18 18">
            <path d="M16.23 12.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85a1.99 1.99 0 0 0 .57-1.64l-.29-2.52A2 2 0 0 0 3.76.01H2.03C.9.01-.04.95.03 2.08c.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
          </svg>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="cursor-pointer inline w-5 h-5"
            viewBox="0 0 32 32">
            <path d="M16 10c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0 3c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
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
