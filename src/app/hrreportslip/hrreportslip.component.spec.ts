import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrreportslipComponent } from './hrreportslip.component';

describe('HrreportslipComponent', () => {
  let component: HrreportslipComponent;
  let fixture: ComponentFixture<HrreportslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrreportslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrreportslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
