import { Component } from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import {LoginComponent} from './login/login.component';
import {AuthCheck} from './authcheck.component';
@Component({
    selector:'my-app',
    template:
    `
   <!-- <h1>{{title}}</h1>-->
<!--
<nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  </nav>-->
      <router-outlet></router-outlet>

    
    `,
styleUrls: ['app/app.component.css'],
    
    directives: [AuthCheck],
    providers: [HeroService,
    ROUTER_PROVIDERS]
 
})
@RouteConfig([
   {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    useAsDefault: true
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  
},
  {
  path: '/blank',
  name: 'Blank',
  component: DashboardComponent,
  
},

{
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
},
{
  path: '/*other',
  name: 'Other',
  redirectTo: ['Login']
}



])
export class AppComponent{
    title = 'Tour of Hereos';

  }

