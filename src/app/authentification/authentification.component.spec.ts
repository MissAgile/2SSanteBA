import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationComponent } from './authentification.component';
import { HeaderComponent } from '../headerFooter/header/header.component';
import { FooterComponent } from '../headerFooter/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DataTablesModule } from 'angular-datatables';
import { MedecinPatientService } from '../servicesSRNRV/medecin-patient-service.service';
import { AuthInterceptor } from '../interceptors/interceptors';
import { Users } from '../modelSRS/users';
import { AppRoutingModule } from '../app-routing.module';

describe('AuthentificationComponent', () => {
  let component: AuthentificationComponent;
  let fixture: ComponentFixture<AuthentificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthentificationComponent,  HeaderComponent,
        FooterComponent,],
        imports: [FormsModule, HttpClientModule, RouterTestingModule,
           DataTablesModule, ],
        providers: [ MedecinPatientService,Users]
    });
    fixture = TestBed.createComponent(AuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
