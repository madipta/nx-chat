import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ChatMessageDto, ContactDto } from '@nx-chat/dto';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { WS_API } from '@nx-chat/settings';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private socket: Socket, private authService: AuthService) {}

  GetContactList(): Observable<ContactDto[]> {
    const userId = this.authService.CurrentUser().userId;
    return new Observable<ContactDto[]>((observer) => {
      this.socket.emit(WS_API.GET_CONTACTS, { userId }, (data: ContactDto[]) => {
        observer.next(data);
      });
    });
  }

  onChatReceived(): Observable<ChatMessageDto> {
    return new Observable<ChatMessageDto>((observer) => {
      this.socket.on(WS_API.SERVER_SEND_CHAT, (data: ChatMessageDto) => {
        observer.next(data);
      });
    });
  }

  loadChat(): Observable<ChatMessageDto[]> {
    const userId = this.authService.CurrentUser().userId;
    return new Observable<ChatMessageDto[]>((observer) => {
      this.socket.emit(WS_API.LOAD_CHAT, { userId }, (data: ChatMessageDto[]) => {
        observer.next(data);
      });
    });
  }

  sendChat(chatMessage: ChatMessageDto) {
    this.socket.emit(WS_API.CLIENT_SEND_CHAT, chatMessage);
  }

  joinChannels() {
    this.socket.emit(WS_API.JOIN_CHANNELS, {
      userId: this.authService.CurrentUser().userId,
    });
  }
}
