System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArchieveService;
    return {
        setters:[],
        execute: function() {
            ArchieveService = (function () {
                function ArchieveService() {
                }
                ArchieveService.prototype.getArchieves = function () {
                    return [
                        {
                            year: 2016,
                            month: 1,
                            id: 1
                        },
                        {
                            year: 2016,
                            month: 2,
                            id: 2
                        },
                        {
                            year: 2016,
                            month: 3,
                            id: 1
                        }
                    ];
                };
                return ArchieveService;
            }());
            exports_1("ArchieveService", ArchieveService);
        }
    }
});
//# sourceMappingURL=achieve.service.js.map