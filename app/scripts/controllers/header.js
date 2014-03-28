'use strict';

angular.module('banetApp')
  .controller('HeaderCtrl', function ($scope,$location) {

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path().match('[/]+([A-z]*)')[0];
    };

  });
