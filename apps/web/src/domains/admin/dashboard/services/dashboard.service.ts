import { Injectable } from '@angular/core';
import { DashboardStatistic } from '@mycafe/types';
import { Observable, of } from 'rxjs';

@Injectable()
export class DashboardService {
  getStatistics(): Observable<DashboardStatistic[]> {
    return of([
      {
        label: 'Виручка',
        value: 1820,
        unit: '$',
        trend: {
          value: '+12%',
          label: 'сегодня',
          direction: 'up',
        },
      },
      {
        label: 'Заказов',
        value: 7,
        trend: {
          value: '1',
          label: 'выдано',
          direction: 'neutral',
        },
      },
      {
        label: 'Средний чек',
        value: 260,
        unit: '$',
      },
      {
        label: 'Блюд в меню',
        value: 9,
        trend: {
          value: '10',
          label: 'всего',
          direction: 'down',
        },
      },
    ]);
  };
}
