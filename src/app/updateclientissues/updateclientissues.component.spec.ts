import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateclientissuesComponent } from './updateclientissues.component';

describe('UpdateclientissuesComponent', () => {
  let component: UpdateclientissuesComponent;
  let fixture: ComponentFixture<UpdateclientissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateclientissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateclientissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
