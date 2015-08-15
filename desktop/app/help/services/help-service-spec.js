(function () {
    'use strict';

    describe('helpService', function () {

        var service;

        beforeEach(function () {
            module('help');

            inject(function (helpService) {
                service = helpService;
            });
        });

        it('API should have getData function', function () {

            expect(service.getData).toBeDefined();

        });

    });

})();
