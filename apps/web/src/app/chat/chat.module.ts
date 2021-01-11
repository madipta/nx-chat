import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatComponent } from './chat.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
  },
];

@NgModule({
  declarations: [ChatComponent, ChatHeaderComponent, ChatViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ChatModule {}
