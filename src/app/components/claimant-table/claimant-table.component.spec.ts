import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimantTableComponent } from './claimant-table.component';

describe('ClaimantTableComponent', () => {
  let component: ClaimantTableComponent;
  let fixture: ComponentFixture<ClaimantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimantTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
