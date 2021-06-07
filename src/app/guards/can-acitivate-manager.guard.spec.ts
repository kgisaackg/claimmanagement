import { TestBed } from '@angular/core/testing';

import { CanAcitivateManagerGuard } from './can-acitivate-manager.guard';

describe('CanAcitivateManagerGuard', () => {
  let guard: CanAcitivateManagerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAcitivateManagerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
