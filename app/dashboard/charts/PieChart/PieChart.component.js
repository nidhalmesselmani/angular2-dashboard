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
var ng2_charts_1 = require('./../../../libs/ng2-charts/ng2-charts');
var common_1 = require('@angular/common');
var PieChartDemoComponent = (function () {
    function PieChartDemoComponent() {
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
    }
    // events
    PieChartDemoComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PieChartDemoComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    PieChartDemoComponent = __decorate([
        core_1.Component({
            selector: 'pie-chart',
            templateUrl: 'app/dashboard/charts/PieChart/PieChart.component.html',
            directives: [ng2_charts_1.CHART_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            styles: ["\n    .chart {\n      display: block;\n    }"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PieChartDemoComponent);
    return PieChartDemoComponent;
}());
exports.PieChartDemoComponent = PieChartDemoComponent;
//# sourceMappingURL=PieChart.component.js.map