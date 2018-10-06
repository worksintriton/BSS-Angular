import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addemployeepg2Component } from './addemployeepg2.component';

describe('Addemployeepg2Component', () => {
  let component: Addemployeepg2Component;
  let fixture: ComponentFixture<Addemployeepg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addemployeepg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addemployeepg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
