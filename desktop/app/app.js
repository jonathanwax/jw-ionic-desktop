(function () {
    'use strict';

    angular.module('app', ['common', 'shell', 'home', 'help']);

    // CONFIG: App (module)
    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {

            /* Add New States Above */
            $urlRouterProvider.otherwise('');

        });

    // RUN: App (module)
    angular
        .module('app')
        .run(function ($rootScope, $ionicPlatform) {

            $rootScope.safeApply = function (fn) {
                var phase = $rootScope.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && (typeof (fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };

            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });

        });

})();
