import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalarypaymentComponent } from './addsalarypayment.component';

describe('AddsalarypaymentComponent', () => {
  let component: AddsalarypaymentComponent;
  let fixture: ComponentFixture<AddsalarypaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsalarypaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsalarypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
