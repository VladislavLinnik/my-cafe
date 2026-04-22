import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZardSwitchComponent } from '@/shared/components/switch';

@Component({
  selector: 'app-menu-dish',
  imports: [ZardSwitchComponent],
  templateUrl: './menu-dish.component.html',
  styleUrl: './menu-dish.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDishComponent {}
