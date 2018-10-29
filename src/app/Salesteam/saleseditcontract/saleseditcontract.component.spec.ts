import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleseditcontractComponent } from './saleseditcontract.component';

describe('SaleseditcontractComponent', () => {
  let component: SaleseditcontractComponent;
  let fixture: ComponentFixture<SaleseditcontractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleseditcontractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleseditcontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
