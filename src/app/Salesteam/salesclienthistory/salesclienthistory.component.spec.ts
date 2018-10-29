import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesclienthistoryComponent } from './salesclienthistory.component';

describe('SalesclienthistoryComponent', () => {
  let component: SalesclienthistoryComponent;
  let fixture: ComponentFixture<SalesclienthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesclienthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesclienthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
