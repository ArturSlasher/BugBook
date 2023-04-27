import { TestBed } from '@angular/core/testing';

import { BugbookService } from './bugbook.service';

describe('BugbookService', () => {
  let service: BugbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
