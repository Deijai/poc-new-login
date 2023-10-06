import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPage } from './step.page';

describe('StepPage', () => {
  let component: StepPage;
  let fixture: ComponentFixture<StepPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepPage]
    });
    fixture = TestBed.createComponent(StepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
