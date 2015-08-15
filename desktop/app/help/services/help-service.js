(function () {
    'use strict';

    /* JAVASCRIPT */

    /**
     * HelpService Object/function
     */
    function HelpService($q, $http) {

        /***************** PRIVATE *******************/

        //always bind to an object.property
        var _model = {
            data: []
        };

        /**
         * getData() - Private function
         */
        function _getData() {
            var deferred = $q.defer();

            if (_model.data.length === 0) {
                $http.get('/data/help.json').success(function (data) {
                    _model.data = data;
                    deferred.resolve(_model.data);
                });
            } else {
                deferred.resolve(_model.data);
            }

            return deferred.promise;
        }

        // init
        _getData();

        /****************** PUBLIC *******************/
        var service = {
            getData: _getData,
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
        .module('help')
        .factory('helpService', HelpService);

})();
