import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';

@Component({
  selector: 'app-menu-dish',
  imports: [ToggleSwitch],
  templateUrl: './menu-dish.component.html',
  styleUrl: './menu-dish.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDishComponent {}
