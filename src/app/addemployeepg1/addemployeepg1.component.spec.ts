import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addemployeepg1Component } from './addemployeepg1.component';

describe('Addemployeepg1Component', () => {
  let component: Addemployeepg1Component;
  let fixture: ComponentFixture<Addemployeepg1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addemployeepg1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addemployeepg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
