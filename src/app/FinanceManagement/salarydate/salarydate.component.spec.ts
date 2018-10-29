import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarydateComponent } from './salarydate.component';

describe('SalarydateComponent', () => {
  let component: SalarydateComponent;
  let fixture: ComponentFixture<SalarydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
