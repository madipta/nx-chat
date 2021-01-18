import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const appRoutes: Routes = [
  {
    path: 'welcome',
    loadChildren: async() => (await import('./welcome/welcome.module')).WelcomeModule,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: async() => (await import('./home/home.module')).HomeModule,
    canActivateChild: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
