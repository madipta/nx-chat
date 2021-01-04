import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatData } from './data/chat-data';
import { LoginData } from './data/login-data';
import { LoginResult } from './data/login-result';
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
  async login(@MessageBody() data: LoginData): Promise<LoginResult> {
    const user = this.userService.Login(data.username);
    const channels = [];
    if (user) {
      const userId = +user.userId;
      for (let i = 1; i < 9; i++) {
        if (i === userId) {
          continue;
        }
        if (i < userId) {
          channels.push(`channel ${i}-${userId}`);
        }
        if (i > userId) {
          channels.push(`channel ${userId}-${i}`);
        }
      }
    }
    return { user, channels };
  }

  @SubscribeMessage('pm')
  async pm(client: Socket, data: ChatData): Promise<WsResponse<ChatData>> {
    const event = 'pm';
    client.to(data.channel).emit(event, data);
    return { event, data };
  }
}
