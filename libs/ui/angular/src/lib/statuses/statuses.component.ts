import { Component } from '@angular/core';

@Component({
  selector: 'ng-chat-statuses',
  template: `
    <div>My Status</div>
    <div>Recent updates</div>
    <div>Viewed updates</div>
    <div>Muted updates</div>
  `,
  host: {
    class: 'flex flex-col max-w-screen-md mx-auto'
  }
})
export class StatusesComponent {}
