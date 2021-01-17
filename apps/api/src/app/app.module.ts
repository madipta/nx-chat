import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChatGateway } from './ws/gateways/chat.gateway';
import { ContactGateway } from './ws/gateways/contact.gateway';
import { EventsGateway } from './ws/gateways/events.gateway';
import { ChatService } from './services/chat.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    EventsGateway,
    ChatGateway,
    ContactGateway,
    ChatService,
    UserService,
  ],
})
export class AppModule {}
