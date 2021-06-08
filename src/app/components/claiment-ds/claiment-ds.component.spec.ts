import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimentDsComponent } from './claiment-ds.component';

describe('ClaimentDsComponent', () => {
  let component: ClaimentDsComponent;
  let fixture: ComponentFixture<ClaimentDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimentDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimentDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
