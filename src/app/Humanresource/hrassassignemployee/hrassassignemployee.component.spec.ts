import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrassassignemployeeComponent } from './hrassassignemployee.component';

describe('HrassassignemployeeComponent', () => {
  let component: HrassassignemployeeComponent;
  let fixture: ComponentFixture<HrassassignemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrassassignemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrassassignemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
