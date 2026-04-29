import { ValueOf } from '../../types';

export const ORDER_STATUS = {
  NEW: 'new',
  IN_PROGRESS: 'in_progress',
  READY: 'ready',
  DONE: 'done',
} as const;

export type OrderStatus = ValueOf<typeof ORDER_STATUS>;
