import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderDirective } from './common/app-header.directive';
import { AppBodyDirective } from './common/app-body.directive';
import { FabDirective } from './common/fab.directive';
import { ChatListComponent } from './chat-list/chat-list.component';
import { StatusesComponent } from './statuses/statuses.component';
import { CallsComponent } from './calls/calls.component';
import { StatusGroupComponent } from './statuses/status-group.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ListItemComponent } from './common/list-item/list-item.component';
import { ActivityListItemComponent } from './common/activity-list-item/activity-list-item.component';
import { NotImplementedDirective } from './common/not-implemented.directive';
import { ChatStatusPipe } from './chat-detail/chat-status.pipe';
import { NewlinePipe } from './chat-detail/newline.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AppHeaderDirective,
    AppBodyDirective,
    FabDirective,
    NotImplementedDirective,
    ChatListComponent,
    StatusesComponent,
    CallsComponent,
    StatusGroupComponent,
    ChatDetailComponent,
    ListItemComponent,
    ActivityListItemComponent,
    ChatStatusPipe,
    NewlinePipe,
  ],
  exports: [
    AppHeaderDirective,
    AppBodyDirective,
    FabDirective,
    NotImplementedDirective,
    ChatListComponent,
    StatusesComponent,
    CallsComponent,
    ChatDetailComponent,
  ],
})
export class UiAngularModule {}
