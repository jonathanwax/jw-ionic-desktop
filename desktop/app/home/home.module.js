(function () {
    'use strict';

    angular.module('home', []);

    angular
        .module('home')
        .config(function ($stateProvider) {

            $stateProvider.state('shell.home', {
                url: '/home',
                views: {
                    'contentView': {
                        templateUrl: 'home/templates/home-template.html',
                        controller: 'homeController',
                        controllerAs: 'vm'
                    }
                }

            });
            /* Add New States Above */

        });

})();
