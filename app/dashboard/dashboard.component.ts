import { Component,OnInit } from '@angular/core';
import {Hero } from '../hero';
import {HeroService} from '../hero.service';
import {   RouteConfig,Route, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DoughnutChartComponent} from './charts/DoughnutChart/DoughnutChart.component';
import {PieChartDemoComponent} from './charts/PieChart/PieChart.component'
import {PolarAreaChartComponent} from './charts/PolarAreaChart/PolarAreaChart.component';
import {GetUserService} from'../services/getUser.service';
import {firstComponent} from './primecomp/first.component'
@Component({
  selector: 'my-dashboard',
  templateUrl:'app/dashboard/dashboard.component.html',
  styleUrls:['app/dashboard/dashboard.component.css'],
  directives: [DoughnutChartComponent,PieChartDemoComponent,PolarAreaChartComponent,firstComponent,ROUTER_DIRECTIVES],
  providers: [GetUserService]
})
export class DashboardComponent implements OnInit {
Author = "Nidhal";
Title= "Dashboard";
Username = {};
 constructor(
          private router: Router,
        private heroService: HeroService,
          private _GetUserService: GetUserService
        ) {}

ngOnInit(){
   this._GetUserService.getUserName().subscribe((res)=>{
     console.log(res);
     if (res=="error"){
       this.logout();
     }else{
          console.log(res.user.name);

     this.Username=res.user.name;
     }
     
    
    })
}
logout(){
  window.localStorage.removeItem('auth_key');
  this.router.navigate(['Login']);
}


  public  isActive(instruction: any[]): boolean {
    console.log(this.router.isRouteActive(this.router.generate(instruction)));
    return this.router.isRouteActive(this.router.generate(instruction));
  }
  currentChoice: string = 'Dashboard';

   setActive(choice: string): void{
  
       this.currentChoice = choice;
     console.log(this.currentChoice); 
  }

   getActive(choice: string) : string{
       if(this.currentChoice == choice)
            return "active";
       else
            return "not";

   }
 }
