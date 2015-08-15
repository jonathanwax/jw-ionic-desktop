(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * CommonController Object/function
     */
    function CommonController() {

        // vm (view-model) is the object we bind to (this controller).
        var vm = this;

        /***************** PRIVATE *******************/
        var _name = 'CommonController';

        /**
         * getName() - Private function
         */
        function _getName(val) {
            return _name;
        }

        /****************** PUBLIC *******************/
        vm.getName = _getName;

    }

    angular
        .module('common')
        .controller('commonController', CommonController);

})();
