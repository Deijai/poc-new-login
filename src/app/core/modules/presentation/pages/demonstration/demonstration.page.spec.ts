import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstrationPage } from './demonstration.page';

describe('DemonstrationPage', () => {
  let component: DemonstrationPage;
  let fixture: ComponentFixture<DemonstrationPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemonstrationPage]
    });
    fixture = TestBed.createComponent(DemonstrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
