import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  template: `
    <app-main-header (select)="select($event)"></app-main-header>
    <div class="overflow-y-auto">
      <router-outlet></router-outlet>
    </div>
  `,
  host: {
    class: 'relative flex flex-col h-screen',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  selected = '';

  constructor(private router: Router) {}

  select(menu) {
    this.selected = menu;
    this.router.navigate(['/' + menu]);
  }
}
