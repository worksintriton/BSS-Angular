import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicebillingComponent } from './invoicebilling.component';

describe('InvoicebillingComponent', () => {
  let component: InvoicebillingComponent;
  let fixture: ComponentFixture<InvoicebillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicebillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicebillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
