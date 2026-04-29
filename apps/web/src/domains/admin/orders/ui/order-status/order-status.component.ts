import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Badge } from 'primeng/badge';
import { ORDER_STATUS, OrderStatus } from '@mycafe/types';

@Component({
  selector: 'app-order-status',
  imports: [Badge],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderStatusComponent {
  readonly status = input.required<OrderStatus>();

  readonly ORDER_STATUS = ORDER_STATUS;
}
