import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTaskCalculatorComponent } from './app-task-calculator.component';

describe('AppTaskCalculatorComponent', () => {
  let component: AppTaskCalculatorComponent;
  let fixture: ComponentFixture<AppTaskCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTaskCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTaskCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
