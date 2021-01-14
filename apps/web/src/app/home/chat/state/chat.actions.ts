import { createAction, props } from '@ngrx/store';
import { ChatMessageDto } from '@nx-chat/dto';

export const load = createAction('[Chat] Load');

export const loadChatSuccess = createAction(
  '[Chat] Load Success',
  props<{ messages: ChatMessageDto[] }>()
);

export const loadChatFailure = createAction(
  '[Chat] Load Failure',
  props<{ error: any }>()
);

export const addChat = createAction(
  '[Chat] Add',
  props<{ message: ChatMessageDto }>()
);

export const sendChat = createAction(
  '[Chat] Send Chat',
  props<{ message: ChatMessageDto }>()
);

export const sendChatFailure = createAction(
  '[Chat] Send Chat Failure',
  props<{ error: any }>()
);
