import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuDishComponent } from './menu-dish.component';

describe('MenuDish', () => {
  let component: MenuDishComponent;
  let fixture: ComponentFixture<MenuDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDishComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDishComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
