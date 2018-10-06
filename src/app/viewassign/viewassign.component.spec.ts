import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassignComponent } from './viewassign.component';

describe('ViewassignComponent', () => {
  let component: ViewassignComponent;
  let fixture: ComponentFixture<ViewassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
