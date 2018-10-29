import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationfeedbackinprogressComponent } from './operationfeedbackinprogress.component';

describe('OperationfeedbackinprogressComponent', () => {
  let component: OperationfeedbackinprogressComponent;
  let fixture: ComponentFixture<OperationfeedbackinprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationfeedbackinprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationfeedbackinprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
