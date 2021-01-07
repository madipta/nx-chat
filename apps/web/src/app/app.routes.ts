import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CallListComponent } from './main/call-list/call-list.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { ChatComponent } from './chat/chat.component';
import { MainComponent } from './main/main.component';
import { PhotoComponent } from './main/photo/photo.component';
import { StatusListComponent } from './main/status-list/status-list.component';
import { ChatViewComponent } from './chat/chat-view/chat-view.component';
import { AuthGuard } from './auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: ContactsComponent },
      { path: 'status', component: StatusListComponent },
      { path: 'calls', component: CallListComponent },
      { path: 'photo', component: PhotoComponent },
    ],
  },
  {
    path: 'chat/:id',
    component: ChatComponent,
    canActivate: [AuthGuard],
    children: [{ path: '', component: ChatViewComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
