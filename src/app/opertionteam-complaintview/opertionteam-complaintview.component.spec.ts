import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertionteamComplaintviewComponent } from './opertionteam-complaintview.component';

describe('OpertionteamComplaintviewComponent', () => {
  let component: OpertionteamComplaintviewComponent;
  let fixture: ComponentFixture<OpertionteamComplaintviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpertionteamComplaintviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpertionteamComplaintviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
