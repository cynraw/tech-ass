import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

interface SubjectPerformance {
  rank_out_of: number;
  subject_name: string;
  score: number;
}

@Component({
  selector: 'app-subject-performance',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './subject-performance.component.html',
  styleUrls: ['./subject-performance.component.sass'],
})
export class SubjectPerformanceComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };

  ngOnInit(): void {
    const subjectData: SubjectPerformance[] = [
      { rank_out_of: 49, subject_name: 'Geography', score: 83 },
      { rank_out_of: 49, subject_name: 'C.R.E.', score: 41 },
      { rank_out_of: 49, subject_name: 'Computer Studies', score: 83 },
      { rank_out_of: 8, subject_name: 'Business Studies', score: 39 },
    ];

    this.barChartData.labels = subjectData.map(
      (subject) => subject.subject_name
    );
    this.barChartData.datasets = [
      { data: subjectData.map((subject) => subject.score), label: 'Scores' },
    ];
  }
}
