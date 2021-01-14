import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiAngularModule } from '@nx-chat/ui/angular';
import { mainRoutes } from './main.routes';
import { HeaderComponent } from './header/header.component';
import { CallListComponent } from './call-list/call-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MainComponent } from './main.component';
import { PhotoComponent } from './photo/photo.component';
import { StatusListComponent } from './status-list/status-list.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    CallListComponent,
    ContactsComponent,
    PhotoComponent,
    StatusListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    UiAngularModule,
  ],
})
export class MainModule {}
