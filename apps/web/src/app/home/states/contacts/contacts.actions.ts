import { createAction, props } from '@ngrx/store';
import { ChatMessageDto, ContactDto } from '@nx-chat/dto';

export enum ContactsAction {
  Load = '[Contacts] Load',
  LoadSuccess = '[Contacts] Load Success',
  LoadFail = '[Contacts] Load Fail',
  ContactSelect = '[Contact] Select',
  ContactUnselect = '[Contact] Unselect',
  ContactResetUnread = '[Contact] Reset Unread',
  ContactNewMessage = '[Contact] New Message',
  ContactNewUnreadMessage = '[Contact] New Unread Message',
}

export const load = createAction(ContactsAction.Load);

export const loadSuccess = createAction(
  ContactsAction.LoadSuccess,
  props<{ contacts: ContactDto[] }>()
);

export const loadFail = createAction(
  ContactsAction.LoadFail,
  props<{ error: any }>()
);

export const contactSelect = createAction(
  ContactsAction.ContactSelect,
  props<{ contact: ContactDto }>()
);

export const contactUnselect = createAction(
  ContactsAction.ContactUnselect,
  props<{ contact: ContactDto }>()
);

export const contactResetUnread = createAction(
  ContactsAction.ContactResetUnread,
  props<{ contact: ContactDto }>()
);

export const newMessage = createAction(
  ContactsAction.ContactNewMessage,
  props<{ message: ChatMessageDto }>()
);

export const newUnreadMessage = createAction(
  ContactsAction.ContactNewUnreadMessage,
  props<{ message: ChatMessageDto }>()
);
