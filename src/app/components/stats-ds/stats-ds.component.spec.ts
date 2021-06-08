import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDsComponent } from './stats-ds.component';

describe('StatsDsComponent', () => {
  let component: StatsDsComponent;
  let fixture: ComponentFixture<StatsDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
