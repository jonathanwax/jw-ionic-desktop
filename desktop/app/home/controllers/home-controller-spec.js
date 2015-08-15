(function () {
    'use strict';

    describe('homeController', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('home');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('homeController', {
                    $scope: scope
                });
            });
        });

        it('API should have getName function', function () {

            expect(ctrl.getName).toBeDefined();

        });

    });

})();
