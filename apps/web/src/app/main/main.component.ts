import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  template: `
    <div class="relative bg-white flex flex-col max-w-screen-xl h-screen mx-auto">
      <ng-chat-header (select)="select($event)"></ng-chat-header>
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainComponent {
  selected = ''

  constructor(private router: Router) { }

  select(menu) {
    this.selected = menu;
    this.router.navigate(['/' + menu])
  }
}
