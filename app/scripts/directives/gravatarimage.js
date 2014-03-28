'use strict';

angular.module('banetApp')
  .directive('gravatarImage', function (simpleUser) {
    return {
      template: '<img ng-src={{url}} alt="{{email}}" />',
      restrict: 'E',
      scope: {
        email: '=email'
      },
      link: function postLink(scope) {
        scope.email = scope.email || '';
        scope.url = simpleUser.getGravatarUrl(scope.email, 50);
      }
    };
  });
