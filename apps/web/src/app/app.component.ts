import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg-white max-w-screen-xl mx-auto">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
