import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesMedecinComponent } from './mes-medecin.component';

describe('MesMedecinComponent', () => {
  let component: MesMedecinComponent;
  let fixture: ComponentFixture<MesMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesMedecinComponent]
    });
    fixture = TestBed.createComponent(MesMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
