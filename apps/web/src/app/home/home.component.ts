import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from '@nx-chat/dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat-home',
  template: `
    <div class="bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col p-8 mx-auto">
      <p class="text-xs text-gray-500 text-center">WalahApp</p>
      <p class="leading-none uppercase tracking-wider text-center text-5xl font-bold text-green-700 mb-10">Welcome</p>
      <img
        [alt]="user.name"
        [src]="user.photoUrl"
        width="120"
        height="120"
        class="rounded-full mx-auto mb-5"
      />
      <h1 class="leading-tight text-center font-medium text-gray-600">{{user.name}}</h1>
      <h2 class="leading-tight text-center text-sm text-gray-500">{{user.username}}</h2>
    </div>
  `,
})
export class HomeComponent implements OnInit, AfterViewInit {
  @HostBinding('className') rootcss =
    'bg-gray-50 flex flex-col place-content-center max-w-screen-md h-screen mx-auto';

  user: UserDto;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.authService.CurrentUser();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.router.navigate(['/main']);
    }, 5000);
  }
}
