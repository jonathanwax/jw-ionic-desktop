(function () {
    'use strict';

    describe('homeService', function () {

        var service;

        beforeEach(function () {
            module('home');

            inject(function (homeService) {
                service = homeService;
            });
        });

        it('should return welcome message', function () {

            var message = service.message;

            expect(message).toEqual('Yeay! Your app is running.');

        });

    });

})();
