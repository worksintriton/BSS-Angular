import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanresoucesComponent } from './humanresouces.component';

describe('HumanresoucesComponent', () => {
  let component: HumanresoucesComponent;
  let fixture: ComponentFixture<HumanresoucesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanresoucesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanresoucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
