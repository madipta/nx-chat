import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { LoginDto, UserDto } from '@nx-chat/dto';
import { UserService } from '../../services/user.service';


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
    @MessageBody() dto: LoginDto
  ): Promise<UserDto> {
    return this.userService.Login(dto.username);
  }
}
