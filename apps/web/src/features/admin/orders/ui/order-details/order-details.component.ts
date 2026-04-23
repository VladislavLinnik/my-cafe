import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { ORDER_STATUS, OrderStatus } from '@mycafe/types';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-order-details',
  imports: [Select, FormsModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailsComponent {
  status = 'success';

  statuses: KeyValue<OrderStatus, string>[] = [
    { key: ORDER_STATUS.NEW, value: 'Новый' },
    { key: ORDER_STATUS.IN_PROGRESS, value: 'Готовится' },
    { key: ORDER_STATUS.READY, value: 'Готов' },
    { key: ORDER_STATUS.DONE, value: 'Выдан' },
  ];
}
