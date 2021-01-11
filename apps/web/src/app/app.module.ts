import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { UiAngularModule } from '@nx-chat/ui/angular';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { CallListComponent } from './main/call-list/call-list.component';
import { HeaderComponent } from './main/header/header.component';
import { PhotoComponent } from './main/photo/photo.component';
import { StatusListComponent } from './main/status-list/status-list.component';

const socketIoConfig: SocketIoConfig = {
  url: 'http://localhost:3333',
  options: {},
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainComponent,
    ChatComponent,
    ChatHeaderComponent,
    ContactsComponent,
    StatusListComponent,
    CallListComponent,
    PhotoComponent,
    HeaderComponent,
    ContactsComponent,
    ChatViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HammerModule,
    SocketIoModule.forRoot(socketIoConfig),
    UiAngularModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
