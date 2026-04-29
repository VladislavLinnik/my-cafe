import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../../core/layout/section-header/section-header.component';
import { MenuCategoryComponent, MenuDishComponent } from '../ui';

@Component({
  selector: 'app-menu-page',
  imports: [SectionHeaderComponent, MenuCategoryComponent, MenuDishComponent],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuPageComponent {}
