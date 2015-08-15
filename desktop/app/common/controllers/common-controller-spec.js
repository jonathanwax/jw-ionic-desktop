(function () {
    'use strict';

    describe('commonController', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('common');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('commonController', {
                    $scope: scope
                });
            });
        });

        it('API should have getName function', function () {

            expect(ctrl.getName).toBeDefined();

        });

    });

})();
