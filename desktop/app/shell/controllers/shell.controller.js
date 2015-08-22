(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * ShellController Object/function
     */
    function ShellController() {

        // vm (view-model) is the object we bind to (this controller).
        var vm = this;

        /***************** PRIVATE *******************/
        var _model = {
            name: ''
        };

        // init
        _model.name = 'shellController';

        /****************** PUBLIC *******************/
        vm.model = _model;

    }

    angular
        .module('shell')
        .controller('shellController', ShellController);

})();
