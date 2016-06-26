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
var testkpi_service_1 = require('../../../services/testkpi.service');
var DoughnutChartComponent = (function () {
    function DoughnutChartComponent(_GetKpiService) {
        this._GetKpiService = _GetKpiService;
        this.data = [];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mails Sails'];
        this.doughnutChartType = 'doughnut';
        this.getKPIBar();
    }
    DoughnutChartComponent.prototype.randomize = function () {
        this.doughnutChartData = [1200, 600, 600];
    };
    DoughnutChartComponent.prototype.getKPIBar = function () {
        var _this = this;
        var dataPoints = [];
        var data = [];
        this._GetKpiService.getKPiServiceBar().then(function (res) {
            var count = Object.keys(res).length;
            for (var i = 0; i < count; i++) {
                _this.data[i] = res[i].Amount;
            }
            console.log(_this.doughnutChartData);
            _this.doughnutChartData = _this.data;
        });
    };
    // events
    DoughnutChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DoughnutChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DoughnutChartComponent = __decorate([
        core_1.Component({
            selector: 'doughnut-chart',
            templateUrl: 'app/dashboard/charts/DoughnutChart/DoughnutChart.component.html',
            directives: [ng2_charts_1.CHART_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            styles: ["\n    .chart {\n      display: block;\n    }"
            ],
            providers: [testkpi_service_1.GetKpiService]
        }), 
        __metadata('design:paramtypes', [testkpi_service_1.GetKpiService])
    ], DoughnutChartComponent);
    return DoughnutChartComponent;
}());
exports.DoughnutChartComponent = DoughnutChartComponent;
//# sourceMappingURL=DoughnutChart.component.js.map