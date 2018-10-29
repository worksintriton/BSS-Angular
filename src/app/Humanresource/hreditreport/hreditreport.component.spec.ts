import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HreditreportComponent } from './hreditreport.component';

describe('HreditreportComponent', () => {
  let component: HreditreportComponent;
  let fixture: ComponentFixture<HreditreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HreditreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HreditreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
