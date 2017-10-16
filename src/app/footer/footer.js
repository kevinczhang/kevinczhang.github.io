(function (angular) {
    "use strict";
    var appFooter = angular.module('myApp.footer', []);

    appFooter.controller("footerCtrl", ['$scope', function ($scope) {
            
        }]);

    myApp.directive("siteFooter",function(){
        return {
            restrict: 'A',
            templateUrl:'app/footer/footer.html'
        };
    });

} (angular));