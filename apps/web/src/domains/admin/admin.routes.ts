import { Route } from '@angular/router';
import { AdminComponent } from './admin.component';

export const ROUTE_TOKENS = {
  ORDERS: 'orders',
  MENU: 'menu',
  DASHBOARD: 'dashboard',
} as const;

export const adminRoutes: Route[] = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: ROUTE_TOKENS.ORDERS,
        loadComponent: () =>
          import('./orders/containers/orders-page.component').then(
            (m) => m.OrdersPageComponent,
          ),
      },
      {
        path: ROUTE_TOKENS.MENU,
        loadComponent: () =>
          import('./menu/containers/menu-page.component').then(
            (m) => m.MenuPageComponent,
          ),
      },
      {
        path: ROUTE_TOKENS.DASHBOARD,
        loadComponent: () =>
          import('./dashboard/containers/dashboard-page.component').then(
            (m) => m.DashboardPageComponent,
          ),
      },
      {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full',
      },
    ],
  },
];
