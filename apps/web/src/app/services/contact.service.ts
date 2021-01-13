import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { ContactDto } from '@nx-chat/dto';
import { AuthService } from './auth.service';
import { ContactState } from '../home/main/contacts/state/contacts.reducer';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(
    private store: Store<ContactState>,
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
}
