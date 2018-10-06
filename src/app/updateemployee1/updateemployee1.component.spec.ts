import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateemployee1Component } from './updateemployee1.component';

describe('Updateemployee1Component', () => {
  let component: Updateemployee1Component;
  let fixture: ComponentFixture<Updateemployee1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Updateemployee1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Updateemployee1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
