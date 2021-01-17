import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ChatMessageDto } from '@nx-chat/dto';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ChatService } from '../../../services/chat.service';
import * as ChatActions from './chat.actions';
import * as ChatSelectors from './chat.selectors';

@Injectable()
export class ChatFacade {
  private unsubscribe$ = new Subject<void>();
  loaded$ = this.store.pipe(select(ChatSelectors.isLoaded));
  messages$ = this.store.pipe(select(ChatSelectors.selectMessages));
  selectedChannel$ = this.store.pipe(select(ChatSelectors.selectedChannel));
  newMessagesCount$ = this.store.pipe(select(ChatSelectors.newMessagesCount));

  constructor(private store: Store, private chatService: ChatService) {}

  sendChat(message: ChatMessageDto) {
    this.store.dispatch(ChatActions.sendChat({ message }));
  }

  getNewContactMessageCount() {
    return this.newMessagesCount$.pipe(
      map((m) => m.filter((msg) => msg.count > 0).length)
    );
  }

  getSelectedMessages(channel: string) {
    return this.messages$.pipe(
      map((msgs) => msgs.filter((msg) => msg.channel === channel))
    );
  }

  init() {
    this.store.dispatch(ChatActions.load());
    this.chatService
      .onChatReceived()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((message) => {
        this.store.dispatch(ChatActions.incomingChat({ message }));
      });
  }

  destroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
