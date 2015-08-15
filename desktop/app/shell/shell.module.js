(function () {
    'use strict';

    angular
        .module('shell', []);

    angular
        .module('shell')
        .config(function ($stateProvider) {

            $stateProvider.state('shell', {
                url: '',
                views: {
                    '': {
                        templateUrl: 'shell/templates/shell.html',
                        controller: 'shellController',
                        controllerAs: 'vm'
                    }
                }
            });
            /* Add New States Above */

        });
})();
