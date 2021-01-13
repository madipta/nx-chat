import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: 'main',
    loadChildren: async () => (await import('./main/main.module')).MainModule,
  },
  {
    path: 'chat/:channel/:guest',
    loadChildren: async () => (await import('./chat/chat.module')).ChatModule,
  },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];
