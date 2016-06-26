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
var primeng_1 = require('primeng/primeng');
var http_1 = require('@angular/http');
var firstComponent = (function () {
    function firstComponent(_http) {
        this._http = _http;
        this.data1 = [1, 2];
        this._http.get('http://localhost/Lumen_API/public/test_kpi')
            .subscribe(function (res) {
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
        };
        this.randomize();
    }
    firstComponent.prototype.randomize = function () {
        var _this = this;
        this._http.get('http://localhost/Lumen_API/public/test_kpi').map(function (res) { return res.json(); })
            .subscribe((function (res) {
            var count = Object.keys(res).length;
            for (var i = 0; i < count; i++) {
                console.log(res[i]);
                _this.data1[i] = res[i].Amount;
            }
            console.log(_this.data);
        }));
        console.log('hi');
        //this.data1 = [1200,600,600];
        this.change();
    };
    firstComponent.prototype.change = function () {
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
        };
    };
    firstComponent.prototype.selectData = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index] });
    };
    firstComponent = __decorate([
        core_1.Component({
            selector: 'first',
            template: "\n<p-growl [value]=\"msgs\"></p-growl>\n\n\n<p-chart type=\"line\" [data]=\"data\" (onDataSelect)=\"selectData($event)\"></p-chart>\n\n\n    ",
            directives: [primeng_1.InputText, primeng_1.UIChart, primeng_1.Growl],
            styles: ["\n   p-growl {\ndisplay: none\n   }\n   "
            ]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], firstComponent);
    return firstComponent;
}());
exports.firstComponent = firstComponent;
//# sourceMappingURL=first.component.js.map