import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu } from '@ng-icons/lucide';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-section-header',
  imports: [NgIcon],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css',
  viewProviders: [provideIcons({ lucideMenu })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  readonly sidebarService = inject(SidebarService);
}
