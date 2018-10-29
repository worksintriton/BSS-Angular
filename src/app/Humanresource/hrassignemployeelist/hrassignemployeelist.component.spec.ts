import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrassignemployeelistComponent } from './hrassignemployeelist.component';

describe('HrassignemployeelistComponent', () => {
  let component: HrassignemployeelistComponent;
  let fixture: ComponentFixture<HrassignemployeelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrassignemployeelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrassignemployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
