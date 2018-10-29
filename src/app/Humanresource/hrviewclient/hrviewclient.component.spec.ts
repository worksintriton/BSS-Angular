import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrviewclientComponent } from './hrviewclient.component';

describe('HrviewclientComponent', () => {
  let component: HrviewclientComponent;
  let fixture: ComponentFixture<HrviewclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrviewclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrviewclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
