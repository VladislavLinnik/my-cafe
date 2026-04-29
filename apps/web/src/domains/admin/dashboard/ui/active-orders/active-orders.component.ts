import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OrderItemComponent } from '../../../orders/ui/order-item/order-item.component';
import { ORDER_STATUS } from '@mycafe/types';

@Component({
  selector: 'app-active-orders',
  imports: [
    OrderItemComponent
  ],
  templateUrl: './active-orders.component.html',
  styleUrl: './active-orders.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveOrdersComponent {
  protected readonly ORDER_STATUS = ORDER_STATUS;
}
