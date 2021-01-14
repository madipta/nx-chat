import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { ContactsFacade } from './main/contacts/state/contacts.facade';
import { ChatFacade } from './chat/state/chat.facade';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromChat from './chat/state/chat.reducer';
import * as fromContacts from './main/contacts/state/contacts.reducer';
import { ChatEffects } from './chat/state/chat.effects';
import { ContactsEffects } from './main/contacts/state/contacts.effects';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    StoreModule.forFeature(fromChat.CHAT_FEATURE_KEY, fromChat.reducer),
    StoreModule.forFeature(
      fromContacts.CONTACTS_FEATURE_KEY,
      fromContacts.reducer
    ),
    EffectsModule.forFeature([ChatEffects, ContactsEffects]),
  ],
  providers: [ContactsFacade, ChatFacade],
})
export class HomeModule {}
