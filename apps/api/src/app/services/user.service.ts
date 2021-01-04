import { Injectable } from '@nestjs/common';
import { UserList } from '../data/user-list';

@Injectable()
export class UserService {
  GetAllUsers() {
    return UserList;
  }
  
  GetAllUsernames() {
    return UserList.map((user) => user.username);
  }

  GetContacts(userId: string) {
    return UserList.filter((user) => user.userId != userId);
  }

  Login(username: string) {
    const user = UserList.filter((user) => user.username === username);
    if (user.length) {
      return user[0];
    }
    return null;
  }
}
