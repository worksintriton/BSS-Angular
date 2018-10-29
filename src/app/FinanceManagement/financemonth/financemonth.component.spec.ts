import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancemonthComponent } from './financemonth.component';

describe('FinancemonthComponent', () => {
  let component: FinancemonthComponent;
  let fixture: ComponentFixture<FinancemonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancemonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancemonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
