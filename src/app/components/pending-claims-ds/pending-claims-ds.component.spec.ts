import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingClaimsDsComponent } from './pending-claims-ds.component';

describe('PendingClaimsDsComponent', () => {
  let component: PendingClaimsDsComponent;
  let fixture: ComponentFixture<PendingClaimsDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingClaimsDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingClaimsDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
