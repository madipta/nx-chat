import { createReducer, on, Action } from '@ngrx/store';
import { ChatMessageDto } from '@nx-chat/dto';
import * as ChatActions from './chat.actions';
import { ChannelMessageCount, NewMessageCounter } from './new-message-counter';

export const CHAT_FEATURE_KEY = 'chat';

export interface ChatState {
  messages: ChatMessageDto[];
  selectedChannel: string;
  newMessagesCount: ChannelMessageCount[];
  loaded: boolean;
  error?: string | null;
};

export const initialState: ChatState = {
  messages: [],
  selectedChannel: null,
  newMessagesCount: [],
  loaded: false,
  error: null,
};

const chatReducer = createReducer(
  initialState,
  on(ChatActions.load, (state) => ({ ...state, loaded: false, error: null })),
  on(ChatActions.loadChatSuccess, (state, { messages }) => ({
    ...state,
    loaded: true,
    messages,
  })),
  on(ChatActions.incomingChat, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message],
  })),
  on(ChatActions.incomingChatCount, (state, { channel }) => ({
    ...state,
    newMessagesCount: NewMessageCounter.add(state.newMessagesCount, channel),
  })),
  on(ChatActions.resetChatCount, (state, { channel }) => ({
    ...state,
    newMessagesCount: NewMessageCounter.reset(state.newMessagesCount, channel),
  })),
  on(ChatActions.loadChatFailure, (state, { error }) => ({ ...state, error })),
  on(ChatActions.sendChatFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: ChatState | undefined, action: Action) {
  return chatReducer(state, action);
};
