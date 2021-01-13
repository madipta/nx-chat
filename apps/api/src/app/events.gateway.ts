import { OnModuleInit } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { customAlphabet } from 'nanoid';
import { ChatMessageDto, ContactDto, LoginDto, UserDto } from '@nx-chat/dto';
import { UserService } from './services/user.service';

const nanoid = customAlphabet('1234567890abcdef', 10);

@WebSocketGateway()
export class EventsGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  constructor(private userService: UserService) {}

  onModuleInit(): void {
    console.log('module init');
  }

  @SubscribeMessage('login')
  async login(
    @ConnectedSocket() client: Socket,
    @MessageBody() dto: LoginDto
  ): Promise<UserDto> {
    return this.userService.Login(dto.username);
  }

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
    @ConnectedSocket() client: Socket,
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

  @SubscribeMessage('pm')
  async pm(
    @ConnectedSocket() client: Socket,
    @MessageBody() dto: ChatMessageDto
  ): Promise<WsResponse<ChatMessageDto>> {
    const event = 'mp';
    dto.id = nanoid();
    dto.at = new Date().toISOString();
    client.to(dto.channel).emit(event, dto);

    return { event, data: dto };
  }
}
