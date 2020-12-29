import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { StatusesComponent } from './statuses/statuses.component';
import { CallsComponent } from './calls/calls.component';
import { StatusComponent } from './statuses/status.component';
import { StatusGroupComponent } from './statuses/status-group.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    ChatListComponent,
    ChatComponent,
    LoginComponent,
    StatusesComponent,
    CallsComponent,
    StatusComponent,
    StatusGroupComponent,
  ],
  exports: [
    HeaderComponent,
    ChatListComponent,
    ChatComponent,
    LoginComponent,
    StatusesComponent,
    CallsComponent,
  ],
})
export class UiAngularModule {}
