'use strict';

angular.module('banetApp')
  .controller('PinboardNewCtrl', function($scope, $location, ppSyncService, simpleUser) {

    $scope.isSubmitting = false;

    $scope.newPin = function() {
      $scope.isSubmitting = true;
      $scope.pin.created = Date.now();
      $scope.pin.user = simpleUser.getUserData();
      $scope.pin.type = 'POST';
      ppSyncService.post($scope.pin).then(function() {
        $location.path('pinboard');
      });
    };

  });
