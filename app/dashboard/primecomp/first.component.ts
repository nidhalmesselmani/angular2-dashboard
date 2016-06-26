import {Component} from '@angular/core';
import {InputText,UIChart,Growl,Message} from 'primeng/primeng';
import { Headers, Http } from '@angular/http';
@Component({
	selector: 'first',
	template: `
<p-growl [value]="msgs"></p-growl>


<p-chart type="line" [data]="data" (onDataSelect)="selectData($event)"></p-chart>


    `,
    directives: [InputText,UIChart,Growl],
     styles: [`
   p-growl {
display: none
   }
   `
  ]
})
export class firstComponent {

msgs: Message[];
    data: any;
data1 = [1,2];
    constructor(private _http:Http) {
         this._http.get('http://localhost/Lumen_API/public/test_kpi')
         .subscribe((res) => {
//console.log(res.json()[0]);
             });
             
         this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: this.data1,
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
     
this.randomize();   
 }
  public randomize():void {
            this._http.get('http://localhost/Lumen_API/public/test_kpi').map(res=>res.json())
         .subscribe((res => {
             var count = Object.keys(res).length;
               for (var i = 0; i < count; i++) {
  
  console.log(res[i]);
   this.data1[i]= res[i].Amount;
  }

console.log( this.data);
             }));
      console.log('hi');
  //this.data1 = [1200,600,600];
  this.change();
  }

public change():void{
         this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: this.data1,
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
}
selectData(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
    }


}
