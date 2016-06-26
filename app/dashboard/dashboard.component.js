"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('../hero.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var DoughnutChart_component_1 = require('./charts/DoughnutChart/DoughnutChart.component');
var PieChart_component_1 = require('./charts/PieChart/PieChart.component');
var PolarAreaChart_component_1 = require('./charts/PolarAreaChart/PolarAreaChart.component');
var getUser_service_1 = require('../services/getUser.service');
var first_component_1 = require('./primecomp/first.component');
var DashboardComponent = (function () {
    function DashboardComponent(router, heroService, _GetUserService) {
        this.router = router;
        this.heroService = heroService;
        this._GetUserService = _GetUserService;
        this.Author = "Nidhal";
        this.Title = "Dashboard";
        this.Username = {};
        this.currentChoice = 'Dashboard';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._GetUserService.getUserName().subscribe(function (res) {
            console.log(res);
            if (res == "error") {
                _this.logout();
            }
            else {
                console.log(res.user.name);
                _this.Username = res.user.name;
            }
        });
    };
    DashboardComponent.prototype.logout = function () {
        window.localStorage.removeItem('auth_key');
        this.router.navigate(['Login']);
    };
    DashboardComponent.prototype.isActive = function (instruction) {
        console.log(this.router.isRouteActive(this.router.generate(instruction)));
        return this.router.isRouteActive(this.router.generate(instruction));
    };
    DashboardComponent.prototype.setActive = function (choice) {
        this.currentChoice = choice;
        console.log(this.currentChoice);
    };
    DashboardComponent.prototype.getActive = function (choice) {
        if (this.currentChoice == choice)
            return "active";
        else
            return "not";
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            styleUrls: ['app/dashboard/dashboard.component.css'],
            directives: [DoughnutChart_component_1.DoughnutChartComponent, PieChart_component_1.PieChartDemoComponent, PolarAreaChart_component_1.PolarAreaChartComponent, first_component_1.firstComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [getUser_service_1.GetUserService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, hero_service_1.HeroService, getUser_service_1.GetUserService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map