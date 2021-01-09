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

  onContactsResult(): Observable<ContactDto[]> {
    this.joinChannels();
    this.socket.emit('contacts', { userId: this.authService.CurrentUser().userId });
    return new Observable<ContactDto[]>((observer) => {
      this.socket.on('contacts-result', (data: ContactDto[]) => {
        observer.next(data);
      });
    });
  }

  onChatReceived(): Observable<ChatMessageDto[]> {
    this.joinChannels();
    return new Observable<ChatMessageDto[]>((observer) => {
      this.socket.on('mp', (data: ChatMessageDto[]) => {
        observer.next(data);
      });
    });
  }

  sendChat(message: string, channel: string) {
    this.socket.emit('pm', {
      sender: this.authService.CurrentUser(),
      message,
      channel,
    });
  }

  joinChannels() {
    this.socket.emit('channels', {
      userId: this.authService.CurrentUser().userId,
    });
  }
}
