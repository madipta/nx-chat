import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ContactDto, UserDto } from '@nx-chat/dto';
import { WS_API } from '@nx-chat/settings';
import { UserService } from '../../services/user.service';


@WebSocketGateway()
export class ContactGateway {
  @WebSocketServer()
  server: Server;

  constructor(private userService: UserService) {}

  @SubscribeMessage(WS_API.JOIN_CHANNELS)
  async channels(
    @ConnectedSocket() client: Socket,
    @MessageBody() dto: { userId: string }
  ): Promise<string[]> {
    const contacts = this.userService.GetContacts(dto.userId);
    const channels = contacts.map((contact) => contact.channel);
    client.leaveAll();
    for (const channel in channels) {
      client.join(channels[channel]);
    }
    return channels;
  }

  @SubscribeMessage(WS_API.GET_CONTACTS)
  async contacts(
    @MessageBody() dto: { userId: string }
  ): Promise<ContactDto[]> {
    return this.userService.GetContacts(dto.userId);
  }

  @SubscribeMessage(WS_API.GET_USER)
  async contact(@MessageBody() dto: { userId: string }): Promise<UserDto> {
    const user = this.userService.GetUser(dto.userId);
    if (user.length) {
      return user[0];
    }
    return null;
  }
}
