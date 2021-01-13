import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CONTACTS_FEATURE_KEY,
  ContactState,
  ContactsPartialState,
  contactsAdapter,
} from './contacts.reducer';

// Lookup the 'Contacts' feature state managed by NgRx
export const getContactsState = createFeatureSelector<
  ContactsPartialState,
  ContactState
>(CONTACTS_FEATURE_KEY);

const { selectAll, selectEntities } = contactsAdapter.getSelectors();

export const getContactsLoaded = createSelector(
  getContactsState,
  (state: ContactState) => state.loaded
);

export const getContactsError = createSelector(
  getContactsState,
  (state: ContactState) => state.error
);

export const getAllContacts = createSelector(getContactsState, (state: ContactState) =>
  selectAll(state)
);

export const getContactsEntities = createSelector(
  getContactsState,
  (state: ContactState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getContactsState,
  (state: ContactState) => state.selectedId
);

export const getSelected = createSelector(
  getContactsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
