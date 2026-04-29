import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { SectionHeaderComponent } from '../../../../core/layout/section-header/section-header.component';
import { StatisticCardComponent } from '../ui/statistic-card/statistic-card.component';
import { DashboardService } from '../services/dashboard.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DashboardStatistic } from '@mycafe/types';
import { ActiveOrdersComponent } from '../ui/active-orders/active-orders.component';
import { TrendingDishesComponent } from '../ui/trending-dishes/trending-dishes.component';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    SectionHeaderComponent,
    StatisticCardComponent,
    ActiveOrdersComponent,
    TrendingDishesComponent,
    FormsModule,
    DatePicker,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardPageComponent {
  readonly dashboardService = inject(DashboardService);

  date: Date | undefined = new Date();

  statistics: Signal<DashboardStatistic[]> = toSignal(
    this.dashboardService.getStatistics(),
    {
      initialValue: [],
    },
  );
}
