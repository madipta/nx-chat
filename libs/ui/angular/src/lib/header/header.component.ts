import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-chat-header',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'flex flex-col flex-nowrap bg-green-800 text-white px-2 border-b-2 border-green-700'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
