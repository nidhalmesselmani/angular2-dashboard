import { Component,OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';

import {Hero} from './hero'
@Component({
  selector: 'my-hero-detail',
templateUrl: 'app/hero-detail.component.html',
styleUrls:['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }


hero: Hero;
constructor(
  private heroService: HeroService,
  private routeParams: RouteParams) {
}
goBack() {
  window.history.back();
}

}
