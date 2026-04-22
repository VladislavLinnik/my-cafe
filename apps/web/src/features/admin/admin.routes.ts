import { Route } from '@angular/router';
import { AdminComponent } from './admin.component';

export const adminRoutes: Route[] = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'orders',
        loadComponent: () => import('./orders/orders.component').then(m => m.OrdersComponent),
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
