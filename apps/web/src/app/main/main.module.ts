import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UiAngularModule } from '@nx-chat/ui/angular';
import { AuthGuard } from '../auth.guard';
import { HeaderComponent } from './header/header.component';
import { CallListComponent } from './call-list/call-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MainComponent } from './main.component';
import { PhotoComponent } from './photo/photo.component';
import { StatusListComponent } from './status-list/status-list.component';

const routes: Routes = [
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
];

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    CallListComponent,
    ContactsComponent,
    PhotoComponent,
    StatusListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), UiAngularModule],
})
export class MainModule {}
