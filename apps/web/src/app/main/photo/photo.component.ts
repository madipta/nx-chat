import { ChangeDetectionStrategy, Component, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  template: `
    <div class="absolute bottom-0 left-0 right-0 text-white opacity-90">
      <div class="w-full flex flex-row items-center justify-around px-16 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="cursor-pointer inline w-8 h-8"
          viewBox="0 0 32 32">
          <path d="M15 8h-3.61l2.28 2.28L15 8zm0-8H5v1.61l6.13 6.13L15 0zM1.41.86L0 2.27l5 5V11h3v9l3.58-6.15L15.73 18l1.41-1.41L1.41.86z" />
        </svg>
        <div class="h-16 w-16 rounded-full border-2 border-white"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="cursor-pointer inline w-8 h-8"
          viewBox="0 0 32 32">
          <path d="M10 13a3 3 0 1 1 0-6 3 3 0 1 1 0 6zm8-11c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3.17L6.4.65A2.03 2.03 0 0 1 7.88 0h4.24a1.99 1.99 0 0 1 1.47.65L14.83 2H18zm-8 13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z" />
        </svg>
      </div>
      <p class="text-sm text-center mb-1">Hold for video, tap for photo</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent {
  @HostBinding('className') rootClass = 'fixed top-0 bottom-0 left-0 right-0 bg-black';
  
  @HostListener('tap') close() {
    alert('Not Implemented.');
    this.router.navigate(['/main']);
  }

  constructor(private router: Router) {}
}
