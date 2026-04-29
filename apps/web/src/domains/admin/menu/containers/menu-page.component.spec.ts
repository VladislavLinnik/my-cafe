import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPageComponent } from './menu-page.component';

describe('MenuComponent', () => {
  let component: MenuPageComponent;
  let fixture: ComponentFixture<MenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
