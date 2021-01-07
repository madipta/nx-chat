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
import { ChatMessageDto, ContactDto, LoginDto, UserDto } from '@nx-chat/dto';
import { UserService } from './services/user.service';

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
    const loginResult = this.userService.Login(dto.username);
    client.emit('login-result', loginResult);
    if (loginResult) {
      const contacts = this.userService.GetContacts(loginResult.userId);
      const channels = contacts.map(contact => contact.channel);
      client.join(channels);    
    }
    return loginResult;
  }

  @SubscribeMessage('contacts')
  async contacts(
    @ConnectedSocket() client: Socket,
    @MessageBody() dto: { userId: string }
  ): Promise<ContactDto[]> {
    const contacts = this.userService.GetContacts(dto.userId);
    client.emit('contacts-result', contacts);
    return contacts;
  }

  @SubscribeMessage('pm')
  async pm(
    @ConnectedSocket() client: Socket,
    @MessageBody() dto: ChatMessageDto
  ): Promise<WsResponse<ChatMessageDto>> {
    const event = 'mp';
    dto.at = new Date().toISOString();
    client.to(dto.channel).emit(event, dto);
    console.log(dto);
    
    return { event, data: dto };
  }
}
