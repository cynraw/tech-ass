import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

interface ExamPerformance {
  exam_name: string;
  avg_score: number;
}

@Component({
  selector: 'app-exam-performance',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './exam-performance.component.html',
  styleUrls: ['./exam-performance.component.sass'],
})
export class ExamPerformanceComponent implements OnInit {
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [],
    labels: [],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },
    plugins: {
      legend: { display: true },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngOnInit(): void {
    const examData: ExamPerformance[] = [
      { exam_name: 'Term 1 CAT 1', avg_score: 75.6 },
      { exam_name: 'Term 1 CAT 2', avg_score: 61.8 },
      { exam_name: 'Term 2 CAT 1', avg_score: 67.8 },
      { exam_name: 'Term 2 CAT 2', avg_score: 63.2 },
      { exam_name: 'Term 3 CAT 1', avg_score: 56.6 },
      { exam_name: 'Term 3 CAT 2', avg_score: 59.1 },
    ];

    this.lineChartData.labels = examData.map((exam) => exam.exam_name);
    this.lineChartData.datasets = [
      {
        data: examData.map((exam) => exam.avg_score),
        label: 'Average Score (Form 2)',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ];
  }
}
