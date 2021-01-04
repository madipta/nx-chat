import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventsGateway } from './events.gateway';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService, EventsGateway],
})
export class AppModule {}
