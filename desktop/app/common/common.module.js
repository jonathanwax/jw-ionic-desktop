(function () {
    'use strict';

    angular
        .module('common', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'ngSanitize', 'ionic', 'angular-loading-bar', 'LocalStorageModule']);

    angular
        .module('common')
        .config(function ($stateProvider, localStorageServiceProvider, $httpProvider) {

            /* Add New States Above */


            /* configure local storage */
            localStorageServiceProvider
                .setPrefix('myApp')
                .setStorageType('localStorage')
                .setNotify(true, true);


            $httpProvider.interceptors.push(function ($q, commonDeviceService) {
                return {
                    'request': function (config) {

                        if (!commonDeviceService.isDesktop && config.url.indexOf('templates/') > 0) {
                            config.url = config.url.replace('templates/', 'templates/mobile/');
                        }

                        return config || $q.when(config);

                    }

                };
            });

        });

    angular
        .module('common')
        .run(function (commonDeviceService) {

            // initialize commonDeviceService
            commonDeviceService.init();
        });

})();
