(function (angular) {
  'use strict';

  angular.module('myApp.about', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/about', {
        templateUrl: 'app/components/about/about.html',
        controller: 'AboutCtrl'
      });
    }])

    .controller('AboutCtrl', [function () {
      this.contactTitle = 'Contact';
      this.educationTitle = 'Education';
      this.skillsTitle = 'Skills';
      this.skillsContent = 'Intro about your skills goes here. Keep the list lean and only show your primary skillset.' +  
        'You can always provide a link to your Linkedin or Coderwall profile so people can get more info there.';
      this.workExperienceTitle = 'Work Experience';

      this.contacts = [
        {iconClass: 'fa fa-map-marker', contactSrOnlyText: 'Location:', contactLink: '#', contactLinkText: 'San Francisco, US'},
        {iconClass: 'fa fa-envelope-o', contactSrOnlyText: 'Email:', contactLink: '#', contactLinkText: 'jameslee@website.com'},
        {iconClass: 'fa fa-link', contactSrOnlyText: 'Website:', contactLink: '#', contactLinkText: 'http://www.website.com'}
      ];
      this.educations = [
        {degreeAndMajor: 'MS in Computer Science', university: 'University College London', year: '(2011-2012)'},
        {degreeAndMajor: 'PhD in Civil Engineering', university: 'University College London', year: '(2011-2012)'}
      ];
      this.skills = [
        {skillName: 'Python & Django', skillLevel: 'Expert', skillWidth: '96%', skillWidthStyle: {"width": '96%'}},
        {skillName: 'Javascript & jQuery', skillLevel: 'Expert', skillWidth: '96%', skillWidthStyle: {"width": '96%'}},
        {skillName: 'HTML5, CSS3, SASS & LESS', skillLevel: 'Expert', skillWidth: '96%', skillWidthStyle: {"width": '96%'}},
        {skillName: 'Ruby on Rails', skillLevel: 'Pro', skillWidth: '85%', skillWidthStyle: {"width": '85%'}}
      ];
      this.jobs = [
        {jobYearLeft: '2009-2011', jobTitleLeft: 'Our Humble Beginnings', jobContentLeft: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + 
          ' Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, ' + 
          'incidunt et ea quo dolore laudantium consectetur!', jobImage: 'assets/images/about/1.png',
          jobYearRight: '2009-2011', jobTitleRight: 'Our Humble Beginnings', jobContentRight: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + 
          ' Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, ' + 
          'incidunt et ea quo dolore laudantium consectetur!'},
        {jobYearLeft: 'March 2011', jobTitleLeft: 'An Agency is Born', jobContentLeft: 'Lorem ipsum dolor sit amet, ' + 
          'consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, ' + 
          'recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!', 
          jobImage: 'assets/images/about/2.png',
          jobYearRight: '2009-2011', jobTitleRight: 'Our Humble Beginnings', jobContentRight: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' + 
          ' Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, ' + 
          'incidunt et ea quo dolore laudantium consectetur!'},
        {jobYearLeft: '', jobTitleLeft: '', jobContentLeft: '', jobImage: 'assets/images/about/3.png',
          jobYearRight: 'December 2012', jobTitleRight: 'Transition to Full Service', jobContentRight: 'Lorem ipsum dolor sit ' + 
            'amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, ' + 
            'recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
        {jobYearLeft: '', jobTitleLeft: '', jobContentLeft: '', jobImage: 'assets/images/about/4.png',
          jobYearRight: 'July 2014', jobTitleRight: 'Phase Two Expansion', jobContentRight: 'Lorem ipsum dolor sit amet, ' + 
          'consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, ' + 
          'recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'}
      ];
    }]);
}(angular));