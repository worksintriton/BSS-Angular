import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesviewnoticeComponent } from './salesviewnotice.component';

describe('SalesviewnoticeComponent', () => {
  let component: SalesviewnoticeComponent;
  let fixture: ComponentFixture<SalesviewnoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesviewnoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesviewnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
