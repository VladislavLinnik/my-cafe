import { ValueOf } from '../../types';

export interface DashboardStatistic {
  label: string;
  value: string | number;
  unit?: string;
  trend?: {
    value: string;
    label: string;
    direction?: DashboardStatisticDirection;
  };
}

export const DASHBOARD_STATISTIC_DIRECTION = {
  UP: 'up',
  DOWN: 'down',
  NEUTRAL: 'neutral',
} as const;

export type DashboardStatisticDirection = ValueOf<typeof DASHBOARD_STATISTIC_DIRECTION>;
