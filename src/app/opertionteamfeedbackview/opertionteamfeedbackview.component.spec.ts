import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertionteamfeedbackviewComponent } from './opertionteamfeedbackview.component';

describe('OpertionteamfeedbackviewComponent', () => {
  let component: OpertionteamfeedbackviewComponent;
  let fixture: ComponentFixture<OpertionteamfeedbackviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpertionteamfeedbackviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpertionteamfeedbackviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
