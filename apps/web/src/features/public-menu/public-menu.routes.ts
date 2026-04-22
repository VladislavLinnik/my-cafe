import { Route } from '@angular/router';
import { PublicMenuComponent } from './public-menu.component';

export const publicMenuRoutes: Route[] = [
  {
    path: '',
    component: PublicMenuComponent,
    children: [

    ]
  }
]
