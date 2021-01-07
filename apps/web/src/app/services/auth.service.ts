import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { UserDto } from '@nx-chat/dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private socket: Socket) {}

  wslogin(model: any) {
    this.socket.emit('login', model);
  }

  onLoginResult(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.socket.on('login-result', (data: UserDto) => {
        observer.next(this.saveUser(data))});
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
    return !!this.getUser();
  }

  getUser(): UserDto {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    localStorage.removeItem('user');
  }
}
