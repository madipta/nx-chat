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
    this.socket.emit('contacts', { userId: this.authService.getUser().userId });
    return new Observable<ContactDto[]>((observer) => {
      this.socket.on('contacts-result', (data: ContactDto[]) => {
        observer.next(data);
      });
    });
  }

  onChatResult(): Observable<ChatMessageDto[]> {
    return new Observable<ChatMessageDto[]>((observer) => {
      this.socket.on('mp', (data: ChatMessageDto[]) => {
        observer.next(data);
      });
    });
  }

  sendChat(message: string, channel: string) {
    this.socket.emit('pm', {
      sender: this.authService.getUser(),
      message,
      channel,
    });
  }

  GetChat(chatId: string /*hostId: number, guestId: number*/) {
    return [
      {
        sender: {
          userId: '1',
          name: 'who?'
        },
        message: 'some looooooooooooooooooooooooooooooooooooooong message ...',
        channel: 'channel',
        at: '1:49 PM',
      },
      {
        sender: {
          userId: '4',
          name: 'me'
        },
        message: 'some looooooooooooooooooooooooooooooooooooooong message ...',
        channel: 'channel',
        at: '1:49 PM',
      },
    ];
  }
}
