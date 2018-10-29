import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrreportComponent } from './hrreport.component';

describe('HrreportComponent', () => {
  let component: HrreportComponent;
  let fixture: ComponentFixture<HrreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
