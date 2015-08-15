(function () {
    'use strict';

    describe('commonService', function () {

        var service;

        beforeEach(function () {
            module('common');

            inject(function (commonService) {
                service = commonService;
            });
        });

        it('should ...', function () {

            expect(service.doSomething()).toBeDefined();

        });

    });

})();
