import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationfeedbackcompletedlistComponent } from './operationfeedbackcompletedlist.component';

describe('OperationfeedbackcompletedlistComponent', () => {
  let component: OperationfeedbackcompletedlistComponent;
  let fixture: ComponentFixture<OperationfeedbackcompletedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationfeedbackcompletedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationfeedbackcompletedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
