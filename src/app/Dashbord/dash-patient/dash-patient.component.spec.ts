import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPatientComponent } from './dash-patient.component';

describe('DashPatientComponent', () => {
  let component: DashPatientComponent;
  let fixture: ComponentFixture<DashPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashPatientComponent]
    });
    fixture = TestBed.createComponent(DashPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
