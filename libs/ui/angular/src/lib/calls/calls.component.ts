import { Component, HostBinding, Input } from '@angular/core';
import { Call } from './call';

@Component({
  selector: 'ng-chat-calls',
  template: `
    <ng-chat-activity-list-item
      [contact]="call"
      *ngFor="let call of callHistory">
      <div additional class="text-green-600 mr-2">
        <svg 
          *ngIf="call.isVideo"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="inline w-4 h-4"
          viewBox="0 0 24 24">
          <path d="M20 19.75A1.25 1.25 0 0 1 18.75 21H1.25A1.25 1.25 0 0 1 0 19.75V5.25A1.25 1.25 0 0 1 1.25 4h17.5A1.25 1.25 0 0 1 20 5.25zm4.76-12.68a.5.5 0 0 0-.49 0L21 8.74v7.51l3.27 1.69a.5.5 0 0 0 .73-.44v-10a.5.5 0 0 0-.24-.43z" />
        </svg>
        <svg 
          *ngIf="!call.isVideo"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="inline w-4 h-4"
          viewBox="0 0 18 18">
          <path d="M16.23 12.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85a1.99 1.99 0 0 0 .57-1.64l-.29-2.52A2 2 0 0 0 3.76.01H2.03C.9.01-.04.95.03 2.08c.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
        </svg>
      </div>
    </ng-chat-activity-list-item>
  `,
})
export class CallsComponent {
  @HostBinding('className') rootClass = 'flex flex-col w-full max-w-md mx-auto';
  @Input() callHistory: Call[] = [];
}
