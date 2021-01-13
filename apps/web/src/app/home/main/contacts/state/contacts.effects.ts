import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { take } from 'rxjs/operators';
import * as ContactsActions from './contacts.actions';
import { ContactService } from 'apps/web/src/app/services/contact.service';

@Injectable()
export class ContactsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactsActions.load),
      fetch({
        run: (action, state) => {
          this.contactService
            .GetUserContactList()
            .pipe(take(1))
            .subscribe((contacts) => {
              ContactsActions.loadSuccess({ contacts });
            });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return ContactsActions.loadFail({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private contactService: ContactService
  ) {}
}
