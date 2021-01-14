import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ContactDto, UserDto } from '@nx-chat/dto';
import { UserService } from '../../services/user.service';


@WebSocketGateway()
export class ContactGateway {
  @WebSocketServer()
  server: Server;

  constructor(private userService: UserService) {}

  @SubscribeMessage('channels')
  async channels(
    @ConnectedSocket() client: Socket,
    @MessageBody() dto: { userId: string }
  ): Promise<string[]> {
    const contacts = this.userService.GetContacts(dto.userId);
    const channels = contacts.map((contact) => contact.channel);
    const rooms = client.adapter.rooms;
    for (const channel in channels) {
      if (!rooms[channel]) {
        client.join(channels[channel]);
      }
    }
    return channels;
  }

  @SubscribeMessage('contacts')
  async contacts(
    @MessageBody() dto: { userId: string }
  ): Promise<ContactDto[]> {
    return this.userService.GetContacts(dto.userId);
  }

  @SubscribeMessage('contact')
  async contact(@MessageBody() dto: { userId: string }): Promise<UserDto> {
    const user = this.userService.GetUser(dto.userId);
    if (user.length) {
      return user[0];
    }
    return null;
  }
}
