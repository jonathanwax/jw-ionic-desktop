(function () {
    'use strict';

    describe('helpController', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('help');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('helpController', {
                    $scope: scope
                });
            });
        });

        it('API should have getName function', function () {

            expect(ctrl.getName).toBeDefined();

        });

    });

})();
