import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const socketIoConfig: SocketIoConfig = {
  url: 'http://localhost:3333',
  options: {},
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HammerModule,
    RouterModule.forRoot(appRoutes),
    SocketIoModule.forRoot(socketIoConfig),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
