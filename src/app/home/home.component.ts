import { Component } from '@angular/core';

import { ExamPerformanceComponent } from '../exam-performance/exam-performance.component';
import { SubjectPerformanceComponent } from '../subject-performance/subject-performance.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SubjectPerformanceComponent,
    ExamPerformanceComponent,
    ProfileComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
