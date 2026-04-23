import { ValueOf } from '../../types';

export const ORDER_STATUS = {
  NEW: 'NEW',
  IN_PROGRESS: 'IN_PROGRESS',
  READY: 'READY',
  DONE: 'DONE',
} as const;

export type OrderStatus = ValueOf<typeof ORDER_STATUS>;
