import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { fetch } from '@nrwl/angular';
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ChatActions from './chat.actions';
import * as ContactsActions from '../contacts/contacts.actions';
import { ChatService } from '../../../services/chat.service';
import { ContactsFacade } from '../contacts/contacts.facade';

@Injectable()
export class ChatEffects {
  load$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ChatActions.load),
        fetch({
          run: () => {
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

  incomingChat$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ChatActions.incomingChat),
        map(async (action) => {
          const { channel } = action.message;
          const con = await this.contactsFacade.getSelectedContact();
          if (!con || channel !== con.channel) {
            this.store.dispatch(ChatActions.incomingChatCount({ channel }));
            this.store.dispatch(ContactsActions.newUnreadMessage(action));
          }
          else {
            this.store.dispatch(ContactsActions.newMessage(action));
          }
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private chatService: ChatService,
    private contactsFacade: ContactsFacade
  ) {}
}
