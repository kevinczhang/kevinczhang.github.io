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
      this.projectList1 = [
        {title: 'Heading', content: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. '+ 
          'Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, ' + 
          'vestibulum at eros. Praesent commodo cursus magna.', link: '#', image: 'assets/images/projects/1.png'},
        {title: 'Virtual StrongBox', content: 'Virtual StrongBox’s patented encryption-at-rest data security & ' + 
          'file exchange solution is regulatory compliant and allows financial institutions to transition to the cloud. ' + 
          'We provide the security and technology required to connect banking legacy technology and workflows to ' + 
          'the consumer and their technology, reducing the workflow burden and achieving cloud-cost benefits..', 
          link: '#', image: 'assets/images/projects/2.png'},
        {title: 'Heading', content: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. '+ 
          'Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, ' + 
          'vestibulum at eros. Praesent commodo cursus magna.', link: '#', image: 'assets/images/projects/3.png'}
      ];
      this.projectList2 = [
        {title: 'LeefLet', subTitle: 'Save the Trees, Empower the Branches.', 
          content: 'With a few, non-sensitive pieces of consumer information (name and email), ' + 
          'an electronic brochure is automatically sent to the consumer with information related to their specific needs. ' +
          'No brochures to carry, none to print – just the info they’ve requested.', link: '#', 
          image: 'assets/images/projects/4.png'},
        {title: "Oh yeah, it's that good.", subTitle: 'See for yourself.', 
          content: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. ' + 
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.', link: '#', 
          image: 'assets/images/projects/5.png'},
        {title: 'And lastly, this one.', subTitle: 'Checkmate.', 
          content: 'With a few, non-sensitive pieces of consumer information (name and email), ' + 
          'an electronic brochure is automatically sent to the consumer with information related to their specific needs. ' +
          'No brochures to carry, none to print – just the info they’ve requested.', link: '#', 
          image: 'assets/images/projects/6.png'}
      ];
    }]);
}(angular));

