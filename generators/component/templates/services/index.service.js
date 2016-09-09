(function () {
    'use strict';

    angular.module('<%= moduleName %>')
        .service('<%= componentName %>Service', <%= componentName %>Service);

    <%= componentName %>Service.$inject = ['$http', '$q'];

    function <%= componentName %>Service($http, $q) {

        var factory = {
            //properties
        };


        return factory;
    }
})();