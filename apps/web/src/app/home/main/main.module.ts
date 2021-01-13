import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UiAngularModule } from '@nx-chat/ui/angular';
import { mainRoutes } from './main.routes';
import { HeaderComponent } from './header/header.component';
import { CallListComponent } from './call-list/call-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MainComponent } from './main.component';
import { PhotoComponent } from './photo/photo.component';
import { StatusListComponent } from './status-list/status-list.component';
import * as fromContacts from './contacts/state/contacts.reducer';
import { ContactsEffects } from './contacts/state/contacts.effects';
import { ContactsFacade } from './contacts/state/contacts.facade';

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
    StoreModule.forFeature(
      fromContacts.CONTACTS_FEATURE_KEY,
      fromContacts.reducer
    ),
    EffectsModule.forFeature([ContactsEffects]),
  ],
  providers: [ContactsFacade],
})
export class MainModule {}
