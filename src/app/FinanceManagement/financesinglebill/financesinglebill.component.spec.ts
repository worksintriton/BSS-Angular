import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesinglebillComponent } from './financesinglebill.component';

describe('FinancesinglebillComponent', () => {
  let component: FinancesinglebillComponent;
  let fixture: ComponentFixture<FinancesinglebillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancesinglebillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancesinglebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
