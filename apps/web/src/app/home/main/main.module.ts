import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UiAngularModule } from '@nx-chat/ui/angular';
import { HeaderComponent } from './header/header.component';
import { CallListComponent } from './call-list/call-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MainComponent } from './main.component';
import { PhotoComponent } from './photo/photo.component';
import { StatusListComponent } from './status-list/status-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromContacts from './contacts/state/contacts.reducer';
import { ContactsEffects } from './contacts/state/contacts.effects';
import { ContactsFacade } from './contacts/state/contacts.facade';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiAngularModule,
    StoreModule.forFeature(
      fromContacts.CONTACTS_FEATURE_KEY,
      fromContacts.reducer
    ),
    EffectsModule.forFeature([ContactsEffects]),
  ],
  providers: [ContactsFacade],
})
export class MainModule {}
