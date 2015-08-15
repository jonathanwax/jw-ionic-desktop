(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * CommonService Object/function
     */
    function CommonService() {

        /***************** PRIVATE *******************/

        //always bind to an object.property
        var _model = {
            data: null
        };

        /**
         * doSomething() - Private function
         */
        function _doSomething() {
            // add logic here...
        }

        /****************** PUBLIC *******************/
        var service = {
            doSomething: _doSomething,
            get data() {
                return _model.data;
            },
            set data(val) {
                _model.data = val;
            }
        };

        return service;

    }

    /* ANGULAR */
    angular
        .module('common')
        .factory('commonService', CommonService);

})();
