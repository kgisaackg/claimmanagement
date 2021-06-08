import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalisedClaimsDsComponent } from './finalised-claims-ds.component';

describe('FinalisedClaimsDsComponent', () => {
  let component: FinalisedClaimsDsComponent;
  let fixture: ComponentFixture<FinalisedClaimsDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalisedClaimsDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalisedClaimsDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
