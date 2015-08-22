(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * commonDeviceService Object/function
     */
    function commonDeviceService(localStorageService, $window) {

        /***************** PRIVATE *******************/

        //always bind to an object.property
        var _model = {
            isDesktop: true,
            deviceName: 'Desktop'
        };

        function _init() {
            if (localStorageService.isSupported) {
                var stored = localStorageService.get('commonDeviceService');
                if (stored) {
                    _model = stored;
                }
            }
        }

        function _setDesktopMode(val) {
            _model.isDesktop = val;
            _model.deviceName = val === true ? 'Desktop' : 'Mobile';

            //save to local storage
            localStorageService.set('commonDeviceService', _model);

            //reload page
            $window.location.reload();
        }

        /****************** PUBLIC *******************/
        var service = {
            init: _init,
            setDesktopMode: _setDesktopMode,
            get isDesktop() {
                return _model.isDesktop;
            },
            set isDesktop(val) {
                _setDesktopMode(val);
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
