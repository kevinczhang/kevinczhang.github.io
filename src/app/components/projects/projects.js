(function (angular) {
  'use strict';

  angular.module('myApp.projects', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/projects', {
        templateUrl: 'app/components/projects/projects.html',
        controller: 'View1Ctrl'
      });
    }])

    .controller('View1Ctrl', [function () {

    }]);
}(angular));

