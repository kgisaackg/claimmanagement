import { TestBed } from '@angular/core/testing';

import { ClaimerService } from './claimer.service';

describe('ClaimerService', () => {
  let service: ClaimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
