import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionContenueComponent } from './gestion-contenue.component';

describe('GestionContenueComponent', () => {
  let component: GestionContenueComponent;
  let fixture: ComponentFixture<GestionContenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionContenueComponent]
    });
    fixture = TestBed.createComponent(GestionContenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
