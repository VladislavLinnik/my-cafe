import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../../core/layout/section-header/section-header.component';
import { OrderDetailsComponent } from '../ui/order-details/order-details.component';
import { OrderItemComponent } from '../ui/order-item/order-item.component';
import { ORDER_STATUS } from '@mycafe/types';

@Component({
  selector: 'app-orders-page',
  imports: [SectionHeaderComponent, OrderDetailsComponent, OrderItemComponent],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersPageComponent {
  readonly ORDER_STATUS = ORDER_STATUS;
}
