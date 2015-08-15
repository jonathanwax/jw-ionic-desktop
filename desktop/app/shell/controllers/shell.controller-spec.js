(function () {
    'use strict';

    describe('shell', function () {

        var scope, ctrl;

        beforeEach(function () {
            module('shell');

            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('shellController', {
                    $scope: scope
                });
            });
        });

        it('model.name should be ShellController', function () {

            expect(ctrl.model.name).toEqual('shellController');

        });

    });

})();
