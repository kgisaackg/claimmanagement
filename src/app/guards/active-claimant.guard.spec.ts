import { TestBed } from '@angular/core/testing';

import { ActiveClaimantGuard } from './active-claimant.guard';

describe('ActiveClaimantGuard', () => {
  let guard: ActiveClaimantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActiveClaimantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
