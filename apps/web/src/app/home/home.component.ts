import { Component } from '@angular/core';
import { ChatFacade } from './states/chat/chat.facade';
import { ContactsFacade } from './states/contacts/contacts.facade';

@Component({
  selector: 'app-chat-home',
  template: `<router-outlet></router-outlet>`,
})
export class HomeComponent {
  constructor(
    private contactsFacade: ContactsFacade,
    private chatFacade: ChatFacade
  ) {
    this.contactsFacade.init();
    this.chatFacade.init();
  }
}
