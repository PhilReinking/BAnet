'use strict';

angular.module('banetApp')
  .controller('PinboardShowCtrl', function ($scope, $routeParams, ppSyncService) {

    ppSyncService.getPost($routeParams.id).then(function(response){
      $scope.pin = response;
    });

  });
