import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from './../../../libs/ng2-charts/ng2-charts';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {GetKpiService} from '../../../services/testkpi.service';


@Component({
  selector: 'polar-area-chart',
  templateUrl: 'app/dashboard/charts/PolarAreaChart/PolarAreaChart.component.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
  styles: [`
    .chart {
      display: block;
    }`
  ]
})
export class PolarAreaChartComponent {

  // PolarArea
  public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend:boolean = true;

  public polarAreaChartType:string = 'polarArea';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }



}