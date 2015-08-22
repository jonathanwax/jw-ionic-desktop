(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * CommonDevice Object/function
     */
    function CommonDevice() {

        /***************** PRIVATE *******************/

        function CommonDeviceDirectiveController(commonDeviceService) {
            var vm = this;

            function _setDesktop(val) {
                commonDeviceService.isDesktop = val;
            }

            /* PUBLIC */
            vm.deviceService = commonDeviceService;
            vm.setDesktop = _setDesktop;
        }

        /**
         * Directives link function
         */
        function _link(scope, iElem, iAttrs, controllers) {
            // add logic here
        }

        /****************** PUBLIC *******************/
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {

            },
            templateUrl: 'common/directives/common.device/common.device.directive.html',
            controller: CommonDeviceDirectiveController,
            controllerAs: 'vm',
            bindToController: true,
            link: _link
        };

        return directive;

    }

    /* ANGULAR */
    angular
        .module('common')
        .directive('commonDevice', CommonDevice);

})();
