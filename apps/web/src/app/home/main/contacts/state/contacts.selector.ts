import { createSelector } from '@ngrx/store';
import { ContactState } from './contacts.reducer';

export interface ContactsRoot {
  contacts: ContactState;
}

export const contactsRoot = (state: ContactsRoot) => state.contacts;

export const isLoaded = createSelector(
  contactsRoot,
  (state: ContactState) => state.loaded
);

export const selectContacts = createSelector(
  contactsRoot,
  (state: ContactState) => state.contacts
);

export const selectedContact = createSelector(
  contactsRoot,
  (state: ContactState) => state.selectedContact
);

export const error = createSelector(
  contactsRoot,
  (state: ContactState) => state.error
);
