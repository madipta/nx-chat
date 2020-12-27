import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CallListComponent } from './main/call-list/call-list.component';
import { ChatListComponent } from './main/chat-list/chat-list.component';
import { ChatComponent } from './chat/chat.component';
import { MainComponent } from './main/main.component';
import { PhotoComponent } from './main/photo/photo.component';
import { StatusListComponent } from './main/status-list/status-list.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: ChatListComponent },
      { path: 'status', component: StatusListComponent },
      { path: 'calls', component: CallListComponent },
      { path: 'photo', component: PhotoComponent },
    ],
  },
  { path: 'chat', component: ChatComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
