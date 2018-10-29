import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationfeedbackcompletedviewComponent } from './operationfeedbackcompletedview.component';

describe('OperationfeedbackcompletedviewComponent', () => {
  let component: OperationfeedbackcompletedviewComponent;
  let fixture: ComponentFixture<OperationfeedbackcompletedviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationfeedbackcompletedviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationfeedbackcompletedviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
