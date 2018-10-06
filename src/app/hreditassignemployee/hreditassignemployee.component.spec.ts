import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HreditassignemployeeComponent } from './hreditassignemployee.component';

describe('HreditassignemployeeComponent', () => {
  let component: HreditassignemployeeComponent;
  let fixture: ComponentFixture<HreditassignemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HreditassignemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HreditassignemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
