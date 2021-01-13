import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ContactsFeature from './contacts.reducer';
import * as ContactsActions from './contacts.actions';

@Injectable()
export class ContactsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactsActions.load),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ContactsActions.loadSuccess({ contacts: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ContactsActions.loadFail({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
