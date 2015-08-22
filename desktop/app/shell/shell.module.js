(function () {
    'use strict';

    angular
        .module('shell', ['common']);

    angular
        .module('shell')
        .config(function ($stateProvider) {

            $stateProvider.state('shell', {
                url: '',
                views: {
                    '': {
                        templateUrl: 'shell/templates/shell.html',
                        controller: 'shellController as vm'
                    }
                }
            });
            /* Add New States Above */

        });
})();
