(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * HomeController Object/function
     */
    function HomeController(homeService) {

        // vm (view-model) is the object we bind to (this controller).
        var vm = this;

        /***************** PRIVATE *******************/
        var _name = 'HomeController';

        /**
         * getName() - Private function
         */
        function _getName(val) {
            return _name;
        }

        /****************** PUBLIC *******************/
        vm.getName = _getName;
        vm.service = homeService;

    }

    angular
        .module('home')
        .controller('homeController', HomeController);

})();
