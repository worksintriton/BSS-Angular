import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclientdetailComponent } from './viewclientdetail.component';

describe('ViewclientdetailComponent', () => {
  let component: ViewclientdetailComponent;
  let fixture: ComponentFixture<ViewclientdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewclientdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewclientdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
