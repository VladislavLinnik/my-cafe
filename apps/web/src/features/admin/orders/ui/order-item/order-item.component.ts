import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { OrderStatusComponent } from '../order-status/order-status.component';
import { OrderStatus } from '@mycafe/types';

@Component({
  selector: 'app-order-item',
  imports: [OrderStatusComponent],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderItemComponent {
  readonly status = input.required<OrderStatus>();
}
