import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderDirective } from './common/app-header.directive';
import { AppBodyDirective } from './common/app-body.directive';
import { FabDirective } from './common/fab.directive';
import { ChatListComponent } from './chat-list/chat-list.component';
import { LoginComponent } from './login/login.component';
import { StatusesComponent } from './statuses/statuses.component';
import { CallsComponent } from './calls/calls.component';
import { StatusGroupComponent } from './statuses/status-group.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ListItemComponent } from './common/list-item/list-item.component';
import { ActivityListItemComponent } from './common/activity-list-item/activity-list-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AppHeaderDirective,
    AppBodyDirective,
    FabDirective,
    ChatListComponent,
    LoginComponent,
    StatusesComponent,
    CallsComponent,
    StatusGroupComponent,
    ChatDetailComponent,
    ListItemComponent,
    ActivityListItemComponent,
  ],
  exports: [
    AppHeaderDirective,
    AppBodyDirective,
    FabDirective,
    ChatListComponent,
    LoginComponent,
    StatusesComponent,
    CallsComponent,
    ChatDetailComponent,
  ],
})
export class UiAngularModule {}
