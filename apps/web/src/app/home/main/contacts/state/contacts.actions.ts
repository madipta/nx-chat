import { createAction, props } from '@ngrx/store';
import { ContactDto } from '@nx-chat/dto';

export enum ContactsAction {
  Load = '[Contacts] Load',
  LoadSuccess = '[Contacts] Load Success',
  LoadFail = '[Contacts] Load Fail',
  ContactSelect = '[Contact] Select',
  ContactUnselect = '[Contact] Unselect',
}

export const load = createAction(
  ContactsAction.Load,
  props<{ userId: string }>()
);

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

export const contactUnselect = createAction(ContactsAction.ContactUnselect);
