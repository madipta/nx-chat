import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-status-list',
  template: `
    <ng-chat-statuses [me]="me" [recent]="recent" [viewed]="viewed" [muted]="muted"></ng-chat-statuses>
    <div ng-chat-fab>
      <svg
        (tap)="notImplemented()"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="w-6 h-6"
        viewBox="0 0 20 20">
        <path d="M10 13a3 3 0 1 1 0-6 3 3 0 1 1 0 6zm8-11c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3.17L6.4.65A2.03 2.03 0 0 1 7.88 0h4.24a1.99 1.99 0 0 1 1.47.65L14.83 2H18zm-8 13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z" />
      </svg>
    </div>
  `,
})
export class StatusListComponent implements OnInit {
  me = {};
  recent = [];
  viewed = [];
  muted = [];

  constructor(private statusService: StatusService) {}
  
  ngOnInit() {
    this.me = this.statusService.GetMyStatus();
    this.recent = this.statusService.GetRecentStatus();
    this.viewed = this.statusService.GetViewedStatus();
    this.muted = this.statusService.GetMutedStatus();
  }

  notImplemented() {
    alert('Not Implemented.');
  }
}
