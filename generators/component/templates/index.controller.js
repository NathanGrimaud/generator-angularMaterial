(function () {

    angular.module('<%= moduleName %>')
        .controller('<%= componentName %>Controller', <%= componentName %>Controller);

    <%= componentName %>Controller.$inject = ["$scope", "$http"];

    function <%= componentName %>Controller($scope, $http) {

        $scope.componentName = "<%= componentName %>";
    }
})();
