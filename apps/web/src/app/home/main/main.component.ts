import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  template: `
    <app-main-header
      (MainMenuSelected)="onMainMenuSelected($event)"
      ng-chat-app-header>
    </app-main-header>
    <div ng-chat-app-body>
      <router-outlet></router-outlet>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  @HostBinding('className') rootClass = 'relative flex flex-col h-screen';
  
  selected = '';

  constructor(private router: Router) {}

  onMainMenuSelected(menu) {
    this.selected = menu;
    this.router.navigate(['/home/main/' + menu]);
  }
}
