import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ContactDto } from '@nx-chat/dto';
import { ChatService } from 'apps/web/src/app/services/chat.service';
import { take } from 'rxjs/operators';
import * as ContactsActions from './contacts.actions';
import * as ContactsSelector from './contacts.selector';

@Injectable()
export class ContactsFacade {
  loaded$ = this.store.pipe(select(ContactsSelector.isLoaded));
  contacts$ = this.store.pipe(select(ContactsSelector.selectContacts));
  selectedContact$ = this.store.pipe(select(ContactsSelector.selectedContact));

  constructor(
    private store: Store,
    private chatService: ChatService,
  ) {}

  init() {
    this.store.dispatch(ContactsActions.load());
    this.chatService.joinChannels();
  }

  selectContact(contact: ContactDto) {
    this.store.dispatch(ContactsActions.contactSelect({ contact }));
  }

  unselectContact() {
    this.store.dispatch(ContactsActions.contactUnselect());
  }

  getSelectedContact() {
    return this.selectedContact$.pipe(take(1)).toPromise();
  }
}
