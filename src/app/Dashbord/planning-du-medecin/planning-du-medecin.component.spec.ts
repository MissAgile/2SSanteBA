import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningDuMedecinComponent } from './planning-du-medecin.component';

describe('PlanningDuMedecinComponent', () => {
  let component: PlanningDuMedecinComponent;
  let fixture: ComponentFixture<PlanningDuMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningDuMedecinComponent]
    });
    fixture = TestBed.createComponent(PlanningDuMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
