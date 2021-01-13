import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'apps/web/src/app/services/auth.service';
import * as ContactsActions from './contacts.actions';

@Injectable()
export class ContactsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  // loaded$ = this.store.pipe(select(ContactsSelectors.getContactsLoaded));
  // allContacts$ = this.store.pipe(select(ContactsSelectors.getAllContacts));
  // selectedContacts$ = this.store.pipe(select(ContactsSelectors.getSelected));

  constructor(private store: Store, private authService: AuthService) {}

  init() {
    const userId = this.authService.CurrentUser().userId;
    if (userId) {
      this.store.dispatch(ContactsActions.load({ userId }));
    }
  }
}
