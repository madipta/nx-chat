import { Injectable } from '@nestjs/common';
import { ContactDto, UserDto } from '@nx-chat/dto';
import { UserList } from '../data/user-list';

@Injectable()
export class UserService {
  GetAllUsers() {
    return UserList;
  }

  GetAllUsernames() {
    return UserList.map((user) => user.username);
  }

  GetContacts(hostId: string): ContactDto[] {
    return UserList.filter((user) => user.userId != hostId).map((user) => {
      const { userId } = user;
      const channel =
        hostId > userId
          ? `channel-${userId}-${hostId}`
          : `channel-${hostId}-${userId}`;
      return {
        ...user,
        channel,
      };
    });
  }

  Login(username: string): UserDto {
    const user = UserList.filter((user) => user.username === username);
    if (user.length) {
      return user[0];
    }
    return null;
  }
}
