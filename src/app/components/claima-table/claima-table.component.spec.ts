import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimaTableComponent } from './claima-table.component';

describe('ClaimaTableComponent', () => {
  let component: ClaimaTableComponent;
  let fixture: ComponentFixture<ClaimaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
