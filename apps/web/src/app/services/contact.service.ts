import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { ContactDto } from '@nx-chat/dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(
    private socket: Socket,
    private authService: AuthService
  ) {}

  onContactsResult(): Observable<ContactDto[]> {
    return new Observable<ContactDto[]>((observer) => {
      this.socket.on('contacts-result', (data: ContactDto[]) => {
        observer.next(data);
      });
    });
  }

  GetContact(contactId: string): Observable<ContactDto> {
    return new Observable<ContactDto>((observer) => {
      this.socket.emit('contact', { userId: contactId }, (res) => {
        observer.next(res);
      });
    });
  }

  GetUserContactList(): Observable<ContactDto[]> {
    const userId = this.authService.CurrentUser().userId;
    return new Observable<ContactDto[]>((observer) => {
      this.socket.emit('contacts', { userId }, (res) => {
        observer.next(res);
      });
    });
  }
}
