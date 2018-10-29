import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateclient1Component } from './updateclient1.component';

describe('Updateclient1Component', () => {
  let component: Updateclient1Component;
  let fixture: ComponentFixture<Updateclient1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Updateclient1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Updateclient1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
