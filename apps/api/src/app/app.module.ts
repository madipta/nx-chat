import { Module } from '@nestjs/common';
import { ChatModule } from '../chat/chat.module';
import { StatusModule } from '../status/status.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, ChatModule, StatusModule],
})
export class AppModule {}
