import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { UiAngularModule } from '@nx-chat/ui/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    UiAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
