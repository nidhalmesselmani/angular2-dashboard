import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from './../../../libs/ng2-charts/ng2-charts';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {GetKpiService} from '../../../services/testkpi.service';


@Component({
  selector: 'pie-chart',
  templateUrl: 'app/dashboard/charts/PieChart/PieChart.component.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
   styles: [`
    .chart {
      display: block;
    }`
  ]
})
export class PieChartDemoComponent {
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}