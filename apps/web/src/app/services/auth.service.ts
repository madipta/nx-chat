import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { UserDto } from '@nx-chat/dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private socket: Socket) {}

  wslogin(model: any): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.socket.emit('login', model, (data: UserDto) => {
        observer.next(this.saveUser(data));
      });
    });
  }

  saveUser(user: UserDto): boolean {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    localStorage.removeItem('user');
    return false;
  }

  isLoggedIn() {
    return !!this.CurrentUser();
  }

  CurrentUser(): UserDto {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    localStorage.removeItem('user');
  }
}
