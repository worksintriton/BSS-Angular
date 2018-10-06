import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienthistoryviewComponent } from './clienthistoryview.component';

describe('ClienthistoryviewComponent', () => {
  let component: ClienthistoryviewComponent;
  let fixture: ComponentFixture<ClienthistoryviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienthistoryviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienthistoryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
