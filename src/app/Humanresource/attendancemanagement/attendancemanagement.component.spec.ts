import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancemanagementComponent } from './attendancemanagement.component';

describe('AttendancemanagementComponent', () => {
  let component: AttendancemanagementComponent;
  let fixture: ComponentFixture<AttendancemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
