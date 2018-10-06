import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateissuesComponent } from './updateissues.component';

describe('UpdateissuesComponent', () => {
  let component: UpdateissuesComponent;
  let fixture: ComponentFixture<UpdateissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
