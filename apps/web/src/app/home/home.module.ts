import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { ChatEffects } from './states/chat/chat.effects';
import { ChatFacade } from './states/chat/chat.facade';
import { ContactsEffects } from './states/contacts/contacts.effects';
import { ContactsFacade } from './states/contacts/contacts.facade';
import * as fromChat from './states/chat/chat.reducer';
import * as fromContacts from './states/contacts/contacts.reducer';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
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
