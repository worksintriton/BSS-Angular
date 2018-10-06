import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesnotificationComponent } from './salesnotification.component';

describe('SalesnotificationComponent', () => {
  let component: SalesnotificationComponent;
  let fixture: ComponentFixture<SalesnotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
