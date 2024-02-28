import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposComponent } from './apropos.component';
import { HeaderComponent } from '../headerFooter/header/header.component';
import { FooterComponent } from '../headerFooter/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AproposComponent', () => {
  let component: AproposComponent;
  let fixture: ComponentFixture<AproposComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AproposComponent,HeaderComponent,FooterComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule,
          ],
    });
    fixture = TestBed.createComponent(AproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
