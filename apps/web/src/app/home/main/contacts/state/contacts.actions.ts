import { createAction, props } from '@ngrx/store';
import { ContactDto } from '@nx-chat/dto';

export enum ContactsAction {
  Add = '[Contacts] Add',
  AddSuccess = '[Contacts] Add Success',
  AddFail = '[Contacts] Add Fail',
  Remove = '[Contacts] Remove',
  RemoveSuccess = '[Contacts] Remove Success',
  RemoveFail = '[Contacts] Remove Fail',
  Load = '[Contacts] Load',
  LoadSuccess = '[Contacts] Load Success',
  LoadFail = '[Contacts] Load Fail',
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
