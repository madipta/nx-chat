import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { ContactDto } from '@nx-chat/dto';
import { WS_API } from '@nx-chat/settings';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(
    private socket: Socket,
    private authService: AuthService
  ) {}

  GetUserContactList(): Observable<ContactDto[]> {
    const userId = this.authService.CurrentUser().userId;
    return new Observable<ContactDto[]>((observer) => {
      this.socket.emit(WS_API.GET_CONTACTS, { userId }, (res) => {
        observer.next(res);
      });
    });
  }
}
