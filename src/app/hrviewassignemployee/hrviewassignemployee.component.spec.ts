import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrviewassignemployeeComponent } from './hrviewassignemployee.component';

describe('HrviewassignemployeeComponent', () => {
  let component: HrviewassignemployeeComponent;
  let fixture: ComponentFixture<HrviewassignemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrviewassignemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrviewassignemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
