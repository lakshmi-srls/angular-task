import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTaskGraphComponent } from './app-task-graph.component';

describe('AppTaskGraphComponent', () => {
  let component: AppTaskGraphComponent;
  let fixture: ComponentFixture<AppTaskGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTaskGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTaskGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
