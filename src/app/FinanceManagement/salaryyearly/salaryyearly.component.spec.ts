import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryyearlyComponent } from './salaryyearly.component';

describe('SalaryyearlyComponent', () => {
  let component: SalaryyearlyComponent;
  let fixture: ComponentFixture<SalaryyearlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryyearlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryyearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
