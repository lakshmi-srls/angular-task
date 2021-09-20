import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTaskTableComponent } from './app-task-table.component';

describe('AppTaskTableComponent', () => {
  let component: AppTaskTableComponent;
  let fixture: ComponentFixture<AppTaskTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTaskTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTaskTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
