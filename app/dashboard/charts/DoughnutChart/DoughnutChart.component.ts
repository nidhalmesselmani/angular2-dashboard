
import {Component} from '@angular/core';
import {CHART_DIRECTIVES} from './../../../libs/ng2-charts/ng2-charts';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';
import {GetKpiService} from '../../../services/testkpi.service';
@Component({
  selector: 'doughnut-chart',
  templateUrl: 'app/dashboard/charts/DoughnutChart/DoughnutChart.component.html',
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES],
   styles: [`
    .chart {
      display: block;
    }`
  ],
  providers : [GetKpiService]
})
export class DoughnutChartComponent {
data = [];
  constructor(private _GetKpiService: GetKpiService){
this.getKPIBar();
}


  public randomize():void {
  this.doughnutChartData = [1200,600,600];
  }
getKPIBar(){
var dataPoints =[];
var data =[];
         this._GetKpiService.getKPiServiceBar().then((res)=>{
      var count = Object.keys(res).length;
    
     
    for (var i = 0; i < count; i++) {
     this.data[i]= res[i].Amount;
  }

console.log(this.doughnutChartData);
this.doughnutChartData = this.data;
 })
}
  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales','Mails Sails'];
  public doughnutChartData:number[];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}