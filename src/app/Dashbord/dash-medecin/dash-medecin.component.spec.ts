import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMedecinComponent } from './dash-medecin.component';

describe('DashMedecinComponent', () => {
  let component: DashMedecinComponent;
  let fixture: ComponentFixture<DashMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashMedecinComponent]
    });
    fixture = TestBed.createComponent(DashMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
