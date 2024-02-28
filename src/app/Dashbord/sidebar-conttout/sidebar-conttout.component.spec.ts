import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarConttoutComponent } from './sidebar-conttout.component';

describe('SidebarConttoutComponent', () => {
  let component: SidebarConttoutComponent;
  let fixture: ComponentFixture<SidebarConttoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarConttoutComponent]
    });
    fixture = TestBed.createComponent(SidebarConttoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
