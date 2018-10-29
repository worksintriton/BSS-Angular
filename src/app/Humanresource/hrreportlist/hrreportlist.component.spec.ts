import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrreportlistComponent } from './hrreportlist.component';

describe('HrreportlistComponent', () => {
  let component: HrreportlistComponent;
  let fixture: ComponentFixture<HrreportlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrreportlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrreportlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
