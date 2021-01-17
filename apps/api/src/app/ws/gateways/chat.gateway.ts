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
import { ChatMessageDto } from '@nx-chat/dto';
import { WS_API } from '@nx-chat/settings';
import { ChatService } from '../../services/chat.service';

const nanoid = customAlphabet('1234567890abcdef', 10);

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private chatService: ChatService) {}

  @SubscribeMessage(WS_API.CLIENT_SEND_CHAT)
  async pm(
    @ConnectedSocket() client: Socket,
    @MessageBody() dto: ChatMessageDto
  ): Promise<WsResponse<ChatMessageDto>> {
    const event = WS_API.SERVER_SEND_CHAT;
    dto.id = nanoid();
    dto.at = new Date().toISOString();
    client.to(dto.channel).emit(event, dto);

    return { event, data: dto };
  }

  @SubscribeMessage(WS_API.LOAD_CHAT)
  async chatLoad(
    @MessageBody() dto: { userId: string }
  ): Promise<ChatMessageDto[]> {
    return this.chatService.loadChat(dto);
  }
}
