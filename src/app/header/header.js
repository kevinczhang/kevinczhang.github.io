(function (angular) {
    "use strict";
    var appHeader = angular.module('myApp.header', []);

    appHeader.controller("headerCtrl", ['$scope', function ($scope) {
            
        }]);

    myApp.directive("siteHeader",function(){
        return {
            restrict: 'E',
            templateUrl:'app/header/header.html'
        };
    });

} (angular));