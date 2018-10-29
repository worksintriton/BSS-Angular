import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesbillingComponent } from './salesbilling.component';

describe('SalesbillingComponent', () => {
  let component: SalesbillingComponent;
  let fixture: ComponentFixture<SalesbillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesbillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
