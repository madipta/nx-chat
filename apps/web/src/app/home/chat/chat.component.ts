import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ContactsFacade } from '../main/contacts/state/contacts.facade';

@Component({
  selector: 'app-chat',
  template: `
    <app-chat-header ng-chat-app-header></app-chat-header>
    <div ng-chat-app-body class="mb-14">
      <app-chat-view></app-chat-view>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit {
  @HostBinding('className') rootClass =
    'relative flex flex-col h-screen bg-gray-200';

  constructor(private router: Router, private contactsFacade: ContactsFacade) {}

  async ngOnInit() {
    if (!(await this.contactsFacade.getSelectedContact())) {
      this.router.navigate(['/home/main']);
    }
  }
}
