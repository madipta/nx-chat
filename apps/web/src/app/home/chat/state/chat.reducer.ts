import { createReducer, on, Action } from '@ngrx/store';
import { ChatMessageDto } from '@nx-chat/dto';
import * as ChatActions from './chat.actions';

export const CHAT_FEATURE_KEY = 'chat';

export interface ChatState {
  messages: ChatMessageDto[];
  selectedChannel: string;
  loaded: boolean;
  error?: string | null;
}

export const initialState: ChatState = {
  messages: [],
  selectedChannel: null,
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
  on(ChatActions.addChat, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message],
  })),
  on(ChatActions.loadChatFailure, (state, { error }) => ({ ...state, error })),
  on(ChatActions.sendChatFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: ChatState | undefined, action: Action) {
  return chatReducer(state, action);
}
