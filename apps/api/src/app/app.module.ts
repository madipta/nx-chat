import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './services/user.service';
import { ChatGateway } from './ws/gateways/chat.gateway';
import { ContactGateway } from './ws/gateways/contact.gateway';
import { EventsGateway } from './ws/gateways/events.gateway';
import { ChatService } from './services/chat.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService, EventsGateway, ChatGateway, ContactGateway, ChatService],
})
export class AppModule {}
