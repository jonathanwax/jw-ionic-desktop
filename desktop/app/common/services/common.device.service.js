(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * commonDeviceService Object/function
     */
    function commonDeviceService() {

        /***************** PRIVATE *******************/

        //always bind to an object.property
        var _model = {
            isDesktop: true,
            deviceName: 'Desktop'
        };

        /****************** PUBLIC *******************/
        var service = {
            get isDesktop() {
                return _model.isDesktop;
            },
            set isDesktop(val) {
                _model.isDesktop = val;
                _model.deviceName = val === true ? 'Desktop' : 'Mobile';
            },
            get deviceName() {
                return _model.deviceName;
            }
        };

        return service;

    }

    /* ANGULAR */
    angular
        .module('common')
        .factory('commonDeviceService', commonDeviceService);

})();
