import { ContactState } from './contacts.reducer';

export const selectContacts = (state: ContactState) => state.contacts;
export const selectedContact = (state: ContactState) => state.selectedContact;
export const isLoaded = (state: ContactState) => state.loaded;
export const error = (state: ContactState) => state.error;
