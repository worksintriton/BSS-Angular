import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancedateComponent } from './financedate.component';

describe('FinancedateComponent', () => {
  let component: FinancedateComponent;
  let fixture: ComponentFixture<FinancedateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancedateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
