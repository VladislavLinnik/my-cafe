import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trending-dishes',
  imports: [],
  templateUrl: './trending-dishes.component.html',
  styleUrl: './trending-dishes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingDishesComponent {}
