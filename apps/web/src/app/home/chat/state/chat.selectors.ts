import { createSelector } from '@ngrx/store';
import { ChatState } from './chat.reducer';

export interface ChatRoot {
  chat: ChatState;
}

export const contactsRoot = (state: ChatRoot) => state.chat;

export const isLoaded = createSelector(
  contactsRoot,
  (state: ChatState) => state.loaded
);

export const selectMessages = createSelector(
  contactsRoot,
  (state: ChatState) => state.messages
);

export const selectedChannel = createSelector(
  contactsRoot,
  (state: ChatState) => state.selectedChannel
);

export const error = createSelector(
  contactsRoot,
  (state: ChatState) => state.error
);
