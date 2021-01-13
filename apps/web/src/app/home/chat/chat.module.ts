import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiAngularModule } from '@nx-chat/ui/angular';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatComponent } from './chat.component';
import { chatRoutes } from './chat.routes';

@NgModule({
  declarations: [ChatComponent, ChatHeaderComponent, ChatViewComponent],
  imports: [CommonModule, UiAngularModule, RouterModule.forChild(chatRoutes)],
})
export class ChatModule {}
