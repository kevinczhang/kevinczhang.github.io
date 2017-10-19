// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap',
  'myApp.header',
  'myApp.footer',
  'myApp.view1',
  'myApp.view2',
  'myApp.home',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
