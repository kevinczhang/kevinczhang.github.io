(function (angular) {
  'use strict';

  angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeCtrl'
      });
    }])

    .controller('HomeCtrl', function () {
      this.myInterval = 5000;
      this.noWrapSlides = false;
      this.active = 0;
      var slides = this.slides = [];
      var currIndex = 0;
      this.fullName = 'Chao Zhang';
      this.title = 'Full Stack Developer';

      this.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
          image: 'http://unsplash.it/' + newWidth + '/300',
          text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
          id: currIndex++
        });
      };

      slides.push({
          image: 'assets/images/NiceToMeetYou.png',
          text: 'Nice to meet you!',
          id: currIndex++
        });
      slides.push({
          image: 'assets/images/projects.png',
          text: 'My projects',
          id: currIndex++
        });
      for (var i = 2; i < 4; i++) {
        this.addSlide();
      }
    });
} (angular));

