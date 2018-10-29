import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationfeedbacklistComponent } from './operationfeedbacklist.component';

describe('OperationfeedbacklistComponent', () => {
  let component: OperationfeedbacklistComponent;
  let fixture: ComponentFixture<OperationfeedbacklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationfeedbacklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationfeedbacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
