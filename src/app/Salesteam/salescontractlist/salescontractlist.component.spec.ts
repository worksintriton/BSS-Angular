import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalescontractlistComponent } from './salescontractlist.component';

describe('SalescontractlistComponent', () => {
  let component: SalescontractlistComponent;
  let fixture: ComponentFixture<SalescontractlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalescontractlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalescontractlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
