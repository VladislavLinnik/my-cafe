import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  DASHBOARD_STATISTIC_DIRECTION,
  DashboardStatistic,
} from '@mycafe/types';

@Component({
  selector: 'app-statistic-card',
  imports: [],
  templateUrl: './statistic-card.component.html',
  styleUrl: './statistic-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticCardComponent {
  readonly statistic = input.required<DashboardStatistic>();

  readonly DASHBOARD_STATISTIC_DIRECTION = DASHBOARD_STATISTIC_DIRECTION;
}
