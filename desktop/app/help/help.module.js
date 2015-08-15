(function () {
    'use strict';

    angular.module('help', []);

    angular
        .module('help')
        .config(function ($stateProvider) {

            $stateProvider.state('shell.help', {
                url: '/help',
                views: {
                    'contentView': {
                        templateUrl: 'help/templates/help-template.html',
                        controller: 'helpController',
                        controllerAs: 'vm'
                    }
                }
            });
            /* Add New States Above */

        });

})();
