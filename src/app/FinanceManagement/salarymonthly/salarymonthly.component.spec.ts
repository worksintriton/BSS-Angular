import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarymonthlyComponent } from './salarymonthly.component';

describe('SalarymonthlyComponent', () => {
  let component: SalarymonthlyComponent;
  let fixture: ComponentFixture<SalarymonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarymonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarymonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
