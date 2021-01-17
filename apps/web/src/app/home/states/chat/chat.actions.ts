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

export const incomingChat = createAction(
  '[Chat] Incoming Chat',
  props<{ message: ChatMessageDto }>()
);

export const incomingChatCount = createAction(
  '[Chat] Incoming Chat Count',
  props<{ channel: string }>()
);

export const resetChatCount = createAction(
  '[Chat] Reset Chat Count',
  props<{ channel: string }>()
);

export const sendChat = createAction(
  '[Chat] Send Chat',
  props<{ message: ChatMessageDto }>()
);

export const sendChatFailure = createAction(
  '[Chat] Send Chat Failure',
  props<{ error: any }>()
);
