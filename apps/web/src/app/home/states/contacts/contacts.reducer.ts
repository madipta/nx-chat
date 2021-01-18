import { createReducer, on, Action } from '@ngrx/store';
import { ContactDto } from '@nx-chat/dto';
import { ContactsUpdater } from './contacts-updater';
import * as ContactsActions from './contacts.actions';

export const CONTACTS_FEATURE_KEY = 'contacts';

export interface ContactState {
  contacts: ContactDto[];
  selectedContact: ContactDto;
  loaded: boolean;
  error?: string | null;
}

const initialState: ContactState = {
  contacts: [],
  selectedContact: null,
  loaded: false,
  error: null
};

const contactsReducer = createReducer(
  initialState,
  on(ContactsActions.load, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ContactsActions.loadSuccess, (state, { contacts }) =>({
    ...state,
    contacts,
    loaded: true,
  })),
  on(ContactsActions.loadFail, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ContactsActions.contactSelect, (state, { contact }) => ({
    ...state,
    selectedContact: contact,
  })),
  on(ContactsActions.contactUnselect, (state) => ({
    ...state,
    selectedContact: null,
  })),
  on(ContactsActions.contactResetUnread, (state, { contact }) => ({
    ...state,
    contacts: ContactsUpdater.resetMessageCount(state.contacts, contact),
  })),
  on(ContactsActions.newMessage, (state, { message }) => ({
    ...state,
    contacts: ContactsUpdater.newMessage(state.contacts, message),
  })),
  on(ContactsActions.newUnreadMessage, (state, { message }) => ({
    ...state,
    contacts: ContactsUpdater.newUnreadMessage(state.contacts, message),
  }))
);

export function reducer(state: ContactState | undefined, action: Action) {
  return contactsReducer(state, action);
}
