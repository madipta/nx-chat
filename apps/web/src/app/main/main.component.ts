import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  template: `
    <app-main-header (MainMenuSelected)="onMainMenuSelected($event)"></app-main-header>
    <div class="overflow-y-auto">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class MainComponent {
  @HostBinding('className') rootClass = 'relative flex flex-col h-screen';
  
  selected = '';

  constructor(private router: Router) {}

  onMainMenuSelected(menu) {
    this.selected = menu;
    this.router.navigate(['/' + menu]);
  }
}
