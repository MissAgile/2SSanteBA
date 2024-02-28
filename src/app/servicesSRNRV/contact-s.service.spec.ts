import { TestBed } from '@angular/core/testing';

import { ContactSService } from './contact-s.service';

describe('ContactSService', () => {
  let service: ContactSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
