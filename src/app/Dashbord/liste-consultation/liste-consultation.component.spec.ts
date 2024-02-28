import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConsultationComponent } from './liste-consultation.component';

describe('ListeConsultationComponent', () => {
  let component: ListeConsultationComponent;
  let fixture: ComponentFixture<ListeConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeConsultationComponent]
    });
    fixture = TestBed.createComponent(ListeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
