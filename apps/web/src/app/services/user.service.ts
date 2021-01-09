import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactDto } from '@nx-chat/dto';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private socket: Socket) {}

  onGetContact(userId: string): Observable<ContactDto> {
    return new Observable<ContactDto>((observer) => {
      this.socket.emit('contact', { userId }, (res) => {
        observer.next(res);
      });
    });
  }
}
