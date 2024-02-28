import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRDVEnAttenteComponent } from './liste-rdven-attente.component';

describe('ListeRDVEnAttenteComponent', () => {
  let component: ListeRDVEnAttenteComponent;
  let fixture: ComponentFixture<ListeRDVEnAttenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeRDVEnAttenteComponent]
    });
    fixture = TestBed.createComponent(ListeRDVEnAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
