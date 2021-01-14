import { Injectable } from '@nestjs/common';
import { ChatMessageDto } from '@nx-chat/dto';

@Injectable()
export class ChatService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loadChat(dto: { userId: string }): ChatMessageDto[] {
    return [];
  }
}
