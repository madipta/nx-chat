import { Injectable } from '@angular/core';
import { fetch } from '@nrwl/angular';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as ContactsActions from './contacts.actions';
import * as ChatActions from '../chat/chat.actions';
import { ContactService } from 'apps/web/src/app/services/contact.service';

@Injectable()
export class ContactsEffects {
  load$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ContactsActions.load),
        fetch({
          run: () => {
            this.contactService
              .GetUserContactList()
              .pipe(take(1))
              .subscribe((contacts) => {
                this.store.dispatch(ContactsActions.loadSuccess({ contacts }));
              });
          },
          onError: (action, error) => {
            console.error('Error', error);
            this.store.dispatch(ContactsActions.loadFail({ error }));
          },
        })
      ),
    { dispatch: false }
  );

  contactSelect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ContactsActions.contactSelect),
        map((action) => {
          const { channel } = action.contact;
          return ChatActions.resetChatCount({ channel });
        })
      ),
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private contactService: ContactService
  ) {}
}
