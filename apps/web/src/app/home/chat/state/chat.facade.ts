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

  constructor(private store: Store, private chatService: ChatService) {}

  sendChat(message: ChatMessageDto) {
    this.store.dispatch(ChatActions.sendChat({ message }));
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
        this.store.dispatch(ChatActions.addChat({ message }));
      });
  }

  destroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
