import { TestBed } from '@angular/core/testing';

import { GoogleCalendarServiceService } from './google-calendar-service.service';

describe('GoogleCalendarServiceService', () => {
  let service: GoogleCalendarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleCalendarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
