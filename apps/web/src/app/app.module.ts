import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiAngularModule } from '@nx-chat/ui/angular';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ChatComponent } from './chat/chat.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ChatListComponent } from './main/chat-list/chat-list.component';
import { CallListComponent } from './main/call-list/call-list.component';
import { HeaderComponent } from './main/header/header.component';
import { PhotoComponent } from './main/photo/photo.component';
import { StatusListComponent } from './main/status-list/status-list.component';

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
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HammerModule,
    UiAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
