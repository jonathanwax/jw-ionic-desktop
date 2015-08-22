(function () {
    'use strict';

    angular.module('home', ['common']);

    angular
        .module('home')
        .config(function ($stateProvider) {

            $stateProvider.state('shell.home', {
                url: '/home',
                views: {
                    'contentView': {
                        templateUrl: 'home/templates/home-template.html',
                        controller: 'homeController as vm'
                    }
                }

            });
            /* Add New States Above */

        });

})();
