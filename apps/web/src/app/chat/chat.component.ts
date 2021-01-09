import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chat',
  template: `
    <app-chat-header
      [name]="name"
      [photoUrl]="photoUrl"
      ng-chat-app-header></app-chat-header>
    <div ng-chat-app-body class="mb-14">
      <router-outlet></router-outlet>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  @HostBinding('className') rootClass = 'relative flex flex-col h-screen bg-gray-200';
  name = '';
  photoUrl = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const guestId = this.route.snapshot.params['guest'];
    this.userService
      .onGetContact(guestId)
      .pipe(take(1))
      .subscribe((res) => {
        this.name = res.name;
        this.photoUrl = res.photoUrl;
        this.cdr.markForCheck();
      });
  }
}
