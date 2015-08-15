(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * HelpController Object/function
     */
    function HelpController(helpService) {

        // vm (view-model) is the object we bind to (this controller).
        var vm = this;

        /***************** PRIVATE *******************/
        var _name = 'HelpController';

        /**
         * getName() - Private function
         */
        function _getName(val) {
            return _name;
        }

        /****************** PUBLIC *******************/
        vm.getName = _getName;
        vm.service = helpService;

    }

    angular
        .module('help')
        .controller('helpController', HelpController);

})();
