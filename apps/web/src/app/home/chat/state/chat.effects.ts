import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';

import * as ChatActions from './chat.actions';
import { ChatService } from '../../../services/chat.service';
import { take } from 'rxjs/operators';

@Injectable()
export class ChatEffects {
  load$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ChatActions.load),
        fetch({
          run: (action) => {
            this.chatService
              .loadChat()
              .pipe(take(1))
              .subscribe((messages) => {
                this.store.dispatch(ChatActions.loadChatSuccess({ messages }));
              });
          },
          onError: (action, error) => {
            console.error('Error', error);
            this.store.dispatch(ChatActions.loadChatFailure({ error }));
          },
        })
      ),
    {
      dispatch: false,
    }
  );

  sendChat$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ChatActions.sendChat),
        fetch({
          run: (action) => {
            const { message } = action;
            this.chatService.sendChat(message);
          },
          onError: (action, error) => {
            console.error('Error', error);
            this.store.dispatch(ChatActions.sendChatFailure({ error }));
          },
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private chatService: ChatService
  ) {}
}
