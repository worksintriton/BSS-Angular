import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarypaymentComponent } from './salarypayment.component';

describe('SalarypaymentComponent', () => {
  let component: SalarypaymentComponent;
  let fixture: ComponentFixture<SalarypaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarypaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
