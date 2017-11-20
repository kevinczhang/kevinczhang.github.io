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
      this.myAvatar = 'assets/images/myAvatar.svg';
      this.aboutMeTitle = 'About Me';
      this.aboutMeContent = "As a Software Engineer, I have amassed extensive experience in developing " +
        "all kinds of Desktop, Web and Mobile Applications. In addition, I am also involved in some research " +
        "work on wireless networks. In general, I am self-motivated and love to learn new cutting-edge " +
        "echnologies to broaden my horizon in different aspects. My past experience enabled me to prioritize " +
        "and remain focused on the essence of goals to be achieved, enhance my ability to learn new concepts " +
        "quickly while working under pressure to analyze and resolve complex issues.";
      this.contactMeUrl = 'http://themes.3rdwavemedia.com/';
      this.aboutUrl = '#!/about';
      this.aboutMeText = 'Learn more';
      this.socials = [
        {link: '#', icon: 'fa fa-twitter'},
        {link: '#', icon: 'fa fa-google-plus'},
        {link: '#', icon: 'fa fa-linkedin'},
        {link: '#', icon: 'fa fa-github-alt'},
      ];

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
}(angular));