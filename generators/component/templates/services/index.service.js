(function () {
    'use strict';

    angular.module('LiveeApp')
        .service('<%= componentName %>', <%= componentName %>Service);

    <%= componentName %>Service.$inject = ['$http', '$q'];

    function <%= componentName %>Service($http, $q) {

        var factory = {
            //properties
        };


        return factory;
    }
})();