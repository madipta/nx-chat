import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderDirective } from './common/directives/app-header.directive';
import { AppBodyDirective } from './common/directives/app-body.directive';
import { FabDirective } from './common/directives/fab.directive';
import { ChatListComponent } from './chat-list/chat-list.component';
import { StatusesComponent } from './statuses/statuses.component';
import { CallsComponent } from './calls/calls.component';
import { StatusGroupComponent } from './statuses/status-group.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ListItemComponent } from './common/list-item/list-item.component';
import { ActivityListItemComponent } from './common/activity-list-item/activity-list-item.component';
import { NotImplementedDirective } from './common/directives/not-implemented.directive';
import { ChatStatusPipe } from './chat-detail/chat-status.pipe';
import { NewlinePipe } from './chat-detail/newline.pipe';
import { CountPillDirective } from './common/directives/count-pill.directives';

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
    CountPillDirective,
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
    CountPillDirective,
  ],
})
export class UiAngularModule {}
