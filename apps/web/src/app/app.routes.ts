import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../features/admin/admin.routes').then((r) => r.adminRoutes),
  },
  {
    path: 'menu',
    loadChildren: () => import('../features/public-menu/public-menu.routes').then(r => r.publicMenuRoutes),
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'admin',
  },
];
