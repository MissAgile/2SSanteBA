import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent } from './accueil.component';
import { HeaderComponent } from '../headerFooter/header/header.component';
import { FooterComponent } from '../headerFooter/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MedecinPatientService } from '../servicesSRNRV/medecin-patient-service.service';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent,  HeaderComponent,
        FooterComponent,],
        imports: [FormsModule, HttpClientModule, RouterTestingModule,
           ],
    });
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
