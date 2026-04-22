import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-public-menu',
  imports: [],
  templateUrl: './public-menu.component.html',
  styleUrl: './public-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicMenuComponent {}
