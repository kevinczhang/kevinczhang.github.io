(function (angular) {
    "use strict";
    var appHeader = angular.module('myApp.header', []);

    appHeader.controller("headerCtrl", ['$scope', function ($scope) {
        $scope.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];
        $scope.status = {
            isopen: false
        };
        $scope.toggled = function (open) {
            $log.log('Dropdown is now: ', open);
        };
        $scope.toggleDropdown = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
    }]);

    myApp.directive("siteHeader", function () {
        return {
            restrict: 'A',
            templateUrl: 'app/components/header/header.html'
        };
    });

} (angular));