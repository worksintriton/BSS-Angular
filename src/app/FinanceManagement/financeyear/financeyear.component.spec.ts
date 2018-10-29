import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceyearComponent } from './financeyear.component';

describe('FinanceyearComponent', () => {
  let component: FinanceyearComponent;
  let fixture: ComponentFixture<FinanceyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
