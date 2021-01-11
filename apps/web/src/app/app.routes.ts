import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [AuthGuard],
  },
  {
    path: 'main',
    loadChildren: async() => (await import('./main/main.module')).MainModule,
    canActivate: [AuthGuard],
  },
  {
    path: 'chat/:channel/:guest',
    loadChildren: async() => (await import('./chat/chat.module')).ChatModule,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];
