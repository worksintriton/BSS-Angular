import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassignemployeeComponent } from './viewassignemployee.component';

describe('ViewassignemployeeComponent', () => {
  let component: ViewassignemployeeComponent;
  let fixture: ComponentFixture<ViewassignemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewassignemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewassignemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
