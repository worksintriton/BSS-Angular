import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertionteamfeedbackComponent } from './opertionteamfeedback.component';

describe('OpertionteamfeedbackComponent', () => {
  let component: OpertionteamfeedbackComponent;
  let fixture: ComponentFixture<OpertionteamfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpertionteamfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpertionteamfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
