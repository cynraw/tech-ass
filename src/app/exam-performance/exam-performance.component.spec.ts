import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPerformanceComponent } from './exam-performance.component';

describe('ExamPerformanceComponent', () => {
  let component: ExamPerformanceComponent;
  let fixture: ComponentFixture<ExamPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
