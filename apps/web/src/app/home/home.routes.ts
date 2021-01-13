import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'main',
        loadChildren: async () =>
          (await import('./main/main.module')).MainModule,
      },
      {
        path: 'chat/:channel/:guest',
        loadChildren: async () =>
          (await import('./chat/chat.module')).ChatModule,
      },
      { path: '**', redirectTo: 'main', pathMatch: 'full' },
    ],
  },
];
