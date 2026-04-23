import { Route } from '@angular/router';
import { AdminComponent } from './admin.component';

export const adminRoutes: Route[] = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'orders',
        loadComponent: () => import('./orders/containers/orders-page.component').then(m => m.OrdersPageComponent),
      },
      {
        path: 'menu',
        loadComponent: () => import('./menu/containers/menu-page.component').then(m => m.MenuPageComponent),
      },
      {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full'
      },
    ]
  }
]
