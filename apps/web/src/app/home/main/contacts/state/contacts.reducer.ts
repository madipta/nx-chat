import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { ContactDto } from '@nx-chat/dto';
import * as ContactsActions from './contacts.actions';

export const CONTACTS_FEATURE_KEY = 'contacts';

export interface ContactState extends EntityState<ContactDto> {
  selectedId?: string | number; // which Contacts record has been selected
  loaded: boolean; // has the Contacts list been loaded
  error?: string | null; // last known error (if any)
}

export interface ContactsPartialState {
  readonly [CONTACTS_FEATURE_KEY]: ContactState;
}

export const contactsAdapter: EntityAdapter<ContactDto> = createEntityAdapter<
  ContactDto
>();

export const initialState: ContactState = contactsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const contactsReducer = createReducer(
  initialState,
  on(ContactsActions.load, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ContactsActions.loadSuccess, (state, { contacts }) =>
    contactsAdapter.setAll(contacts, { ...state, loaded: true })
  ),
  on(ContactsActions.loadFail, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: ContactState | undefined, action: Action) {
  return contactsReducer(state, action);
}
