import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as ContactsActions from './contacts.actions';
import * as ContactsFeature from './contacts.reducer';
import * as ContactsSelectors from './contacts.selectors';

@Injectable()
export class ContactsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ContactsSelectors.getContactsLoaded));
  allContacts$ = this.store.pipe(select(ContactsSelectors.getAllContacts));
  selectedContacts$ = this.store.pipe(select(ContactsSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ContactsActions.load({userId:''}));
  }
}
