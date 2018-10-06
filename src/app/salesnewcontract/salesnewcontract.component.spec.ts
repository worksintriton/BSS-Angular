import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesnewcontractComponent } from './salesnewcontract.component';

describe('SalesnewcontractComponent', () => {
  let component: SalesnewcontractComponent;
  let fixture: ComponentFixture<SalesnewcontractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesnewcontractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesnewcontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
