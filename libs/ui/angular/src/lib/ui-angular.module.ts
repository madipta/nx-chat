import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, ContactListComponent],
  exports: [HeaderComponent, ContactListComponent],
})
export class UiAngularModule {}
