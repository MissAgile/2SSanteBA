import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierPlannificationComponent } from './calendrier-plannification.component';

describe('CalendrierPlannificationComponent', () => {
  let component: CalendrierPlannificationComponent;
  let fixture: ComponentFixture<CalendrierPlannificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendrierPlannificationComponent]
    });
    fixture = TestBed.createComponent(CalendrierPlannificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
