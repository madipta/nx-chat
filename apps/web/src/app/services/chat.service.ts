import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ChatMessageDto, ContactDto } from '@nx-chat/dto';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private socket: Socket, private authService: AuthService) {}

  GetContactList(): Observable<ContactDto[]> {
    const userId = this.authService.CurrentUser().userId;
    return new Observable<ContactDto[]>((observer) => {
      this.socket.emit('contacts', { userId }, (data: ContactDto[]) => {
        observer.next(data);
      });
    });
  }

  onChatReceived(): Observable<ChatMessageDto> {
    return new Observable<ChatMessageDto>((observer) => {
      this.socket.on('mp', (data: ChatMessageDto) => {
        observer.next(data);
      });
    });
  }

  loadChat(): Observable<ChatMessageDto[]> {
    const userId = this.authService.CurrentUser().userId;
    return new Observable<ChatMessageDto[]>((observer) => {
      this.socket.emit('chat-load', { userId }, (data: ChatMessageDto[]) => {
        observer.next(data);
      });
    });
  }

  sendChat(chatMessage: ChatMessageDto) {
    this.socket.emit('pm', chatMessage);
  }

  joinChannels() {
    this.socket.emit('channels', {
      userId: this.authService.CurrentUser().userId,
    });
  }
}
