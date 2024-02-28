import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarConttoutComponent } from './navbar-conttout.component';

describe('NavbarConttoutComponent', () => {
  let component: NavbarConttoutComponent;
  let fixture: ComponentFixture<NavbarConttoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarConttoutComponent]
    });
    fixture = TestBed.createComponent(NavbarConttoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
