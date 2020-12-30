import { Component } from '@angular/core';

@Component({
  selector: 'app-call-list',
  template: `
    <ng-chat-calls></ng-chat-calls>
  `,
  host: {
    class: 'flex flex-col px-2'
  }
})
export class CallListComponent {}
