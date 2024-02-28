import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriseRdvComponent } from './prise-rdv.component';

describe('PriseRdvComponent', () => {
  let component: PriseRdvComponent;
  let fixture: ComponentFixture<PriseRdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriseRdvComponent]
    });
    fixture = TestBed.createComponent(PriseRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
