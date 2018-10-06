import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addemployeepg3Component } from './addemployeepg3.component';

describe('Addemployeepg3Component', () => {
  let component: Addemployeepg3Component;
  let fixture: ComponentFixture<Addemployeepg3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addemployeepg3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addemployeepg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
