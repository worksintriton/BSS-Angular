import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertionteamComplaintComponent } from './opertionteam-complaint.component';

describe('OpertionteamComplaintComponent', () => {
  let component: OpertionteamComplaintComponent;
  let fixture: ComponentFixture<OpertionteamComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpertionteamComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpertionteamComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
