import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg-white">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
