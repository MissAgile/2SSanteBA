import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDesRVComponent } from './historique-des-rv.component';

describe('HistoriqueDesRVComponent', () => {
  let component: HistoriqueDesRVComponent;
  let fixture: ComponentFixture<HistoriqueDesRVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueDesRVComponent]
    });
    fixture = TestBed.createComponent(HistoriqueDesRVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
