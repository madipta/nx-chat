import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiAngularModule } from '@nx-chat/ui/angular';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatComponent } from './chat.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
  },
];

@NgModule({
  declarations: [ChatComponent, ChatHeaderComponent, ChatViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UiAngularModule],
})
export class ChatModule {}
