import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {}
