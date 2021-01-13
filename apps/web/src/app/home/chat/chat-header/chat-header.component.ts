import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  template: `
    <div class="flex items-center w-full py-3">
      <a routerLink="/home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="cursor-pointer w-5 h-5 mt-1"
          viewBox="0 0 24 24">
          <path d="M15 7H3.83l4.88-4.88a1.01 1.01 0 0 0 0-1.42C8.32.31 7.69.31 7.3.7L.71 7.29c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L3.83 9H15c.55 0 1-.45 1-1s-.45-1-1-1z" />
        </svg>
      </a>
      <img
        [alt]="name"
        [src]="photoUrl"
        width="42"
        height="42"
        class="rounded-full mx-auto">
      <div class="flex flex-col flex-grow text-sm mx-2">
        <h2 class="leading-tight font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden">{{name}}</h2>
        <p class="leading-tight text-gray-200 whitespace-nowrap overflow-ellipsis overflow-hidden">{{description}}</p>
      </div>
      <div class="flex-none flex-nowrap">
        <svg 
          ng-chat-not-implemented
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="cursor-pointer inline w-5 h-5 mr-6"
          viewBox="0 0 25 25">
          <path d="M20 19.75A1.25 1.25 0 0 1 18.75 21H1.25A1.25 1.25 0 0 1 0 19.75V5.25A1.25 1.25 0 0 1 1.25 4h17.5A1.25 1.25 0 0 1 20 5.25zm4.76-12.68a.5.5 0 0 0-.49 0L21 8.74v7.51l3.27 1.69a.5.5 0 0 0 .73-.44v-10a.5.5 0 0 0-.24-.43z" />
        </svg>
        <svg 
          ng-chat-not-implemented
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="cursor-pointer inline w-4 h-4 mr-4"
          viewBox="0 0 18 18">
          <path d="M16.23 12.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85a1.99 1.99 0 0 0 .57-1.64l-.29-2.52A2 2 0 0 0 3.76.01H2.03C.9.01-.04.95.03 2.08c.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
        </svg>
        <svg 
          ng-chat-not-implemented
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="cursor-pointer inline w-5 h-5"
          viewBox="0 0 32 32">
          <path d="M16 10c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0 3c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
        </svg>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatHeaderComponent {
  @Input() name = '';
  @Input() photoUrl = '';
  @Input() description = 'zzz';
}
