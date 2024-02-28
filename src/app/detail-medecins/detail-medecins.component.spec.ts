import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMedecinsComponent } from './detail-medecins.component';
import { HeaderComponent } from '../headerFooter/header/header.component';
import { FooterComponent } from '../headerFooter/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Users } from '../modelSRS/users';

describe('DetailMedecinsComponent', () => {
  let component: DetailMedecinsComponent;
  let fixture: ComponentFixture<DetailMedecinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailMedecinsComponent,  HeaderComponent,
        FooterComponent,],
        imports: [FormsModule, HttpClientModule, RouterTestingModule,
           ],

        providers: [ Users]
    });
    fixture = TestBed.createComponent(DetailMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
