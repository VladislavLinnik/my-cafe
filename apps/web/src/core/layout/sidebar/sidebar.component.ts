import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { filter } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideXCircle } from '@ng-icons/lucide';
import { ROUTE_TOKENS } from '../../../domains/admin/admin.routes';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, NgIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ lucideXCircle })],
  host: {
    '[class.hidden]': '!sidebarService.isOpen()',
  },
})
export class SidebarComponent {
  readonly sidebarService = inject(SidebarService);
  readonly ROUTE_TOKENS = ROUTE_TOKENS;

  constructor() {
    const router = inject(Router);
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.sidebarService.close());
  }
}
