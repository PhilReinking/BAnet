'use strict';

angular.module('banetApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ppSync'
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/pinboard', {
        templateUrl: 'views/pinboard.html',
        controller: 'PinboardCtrl'
      })
      .when('/pinboard/new', {
        templateUrl: 'views/pinboard/new.html',
        controller: 'PinboardNewCtrl'
      })
      .when('/pinboard/show/:id', {
        templateUrl: 'views/pinboard/show.html',
        controller: 'PinboardShowCtrl'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/channel/:name', {
        templateUrl: 'views/channel.html',
        controller: 'ChannelCtrl'
      })
      .when('/channel/:name/new', {
        templateUrl: 'views/channel/:name/new.html',
        controller: 'ChannelNameNewCtrl'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
