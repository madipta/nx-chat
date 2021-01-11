import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form
      #loginForm="ngForm"
      class="flex flex-col w-11/12 md:w-3/5 text-xs text-black text-center px-2 md:px-10 pt-2 mx-auto opacity-90">
      <h2 class="text-3xl md:text-4xl text-gray-700 font-bold mb-8">
        Please Sign In
      </h2>
      <input
        type="text"
        name="username"
        ngModel
        placeholder="USERNAME  vima, carl, sal, giu, tony, vingi"
        class="py-3 px-3 border border-gray-400 mb-2"
      />
      <input
        type="password"
        name="password"
        ngModel
        placeholder="PASSWORD  any"
        class="py-3 px-3 border border-gray-400 mb-4"
      />
      <button
        (click)="login()"
        class="bg-green-700 font-semibold uppercase tracking-wider text-white py-3 mb-8">
        Sign In
      </button>
      <a
        ng-chat-not-implemented
        class="leading-tight text-gray-600 hover:underline mb-2">
        Forgot Password?
      </a>
      <a
        ng-chat-not-implemented
        class="leading-tight text-gray-600 hover:underline">
        Don't have account? Join Now
      </a>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @HostBinding('className') rootcss =
    'flex flex-col place-content-center max-w-screen-md h-screen bg-gradient-to-b from-green-100 to-gray-100 mx-auto';
  @ViewChild('loginForm') loginForm: NgForm;
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    const val = this.loginForm.value;
    if (!val || !val.username) {
      return;
    }
    this.authService.wslogin(val);
    const res = await this.authService
      .onLoginResult()
      .pipe(take(1))
      .toPromise();
    if (res) {
      this.router.navigate(['/']);
    }
  }
}
