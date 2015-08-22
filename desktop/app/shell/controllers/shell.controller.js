(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * ShellController Object/function
     */
    function ShellController(commonDeviceService) {

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
        vm.deviceService = commonDeviceService;

    }

    angular
        .module('shell')
        .controller('shellController', ShellController);

})();
