import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiAngularModule } from '@nx-chat/ui/angular';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './main/chat-list/chat-list.component';
import { StatusListComponent } from './main/status-list/status-list.component';
import { CallListComponent } from './main/call-list/call-list.component';
import { PhotoComponent } from './main/photo/photo.component';
import { HeaderComponent } from './main/header/header.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ChatComponent,
    ChatHeaderComponent,
    ChatListComponent,
    StatusListComponent,
    CallListComponent,
    PhotoComponent,
    HeaderComponent,
    ChatListComponent,
    ChatViewComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), UiAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
