import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendingDishesComponent } from './trending-dishes.component';

describe('TrendingDishesComponent', () => {
  let component: TrendingDishesComponent;
  let fixture: ComponentFixture<TrendingDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingDishesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingDishesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
