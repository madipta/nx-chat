import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { take } from 'rxjs/operators';
import * as ContactsActions from './contacts.actions';
import { ContactService } from 'apps/web/src/app/services/contact.service';
import { Store } from '@ngrx/store';

@Injectable()
export class ContactsEffects {
  load$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ContactsActions.load),
        fetch({
          run: (action, state) => {
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

  constructor(
    private store: Store,
    private actions$: Actions,
    private contactService: ContactService,
  ) {}
}
