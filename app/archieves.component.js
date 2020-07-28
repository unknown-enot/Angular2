System.register(['angular2/router', "angular2/core", "./achieve.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, achieve_service_1;
    var ArchievesComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (achieve_service_1_1) {
                achieve_service_1 = achieve_service_1_1;
            }],
        execute: function() {
            ArchievesComponent = (function () {
                function ArchievesComponent(_archieveService) {
                    this._archieveService = _archieveService;
                    this.archieves = [];
                }
                ArchievesComponent.prototype.ngOnInit = function () {
                    this.archieves = this._archieveService.getArchieves();
                };
                ArchievesComponent = __decorate([
                    core_1.Component({
                        selector: 'archieves',
                        template: "\n        <h1>Home Page</h1>\n        <ul>\n            <li *ngFor=\"#archieve of archieves\">\n                <a [routerLink]=\"['Archieve', {year: archieve.year, month: archieve.month} ]\">{{ archieve.year }}/{{ archieve.month }}</a>\n            </li>\n        </ul>\n    ",
                        providers: [achieve_service_1.ArchieveService],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [achieve_service_1.ArchieveService])
                ], ArchievesComponent);
                return ArchievesComponent;
            }());
            exports_1("ArchievesComponent", ArchievesComponent);
        }
    }
});
//# sourceMappingURL=archieves.component.js.map