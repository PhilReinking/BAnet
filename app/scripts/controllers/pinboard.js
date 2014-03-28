'use strict';

angular.module('banetApp')
  .controller('PinboardCtrl', function($scope, ppSyncService) {

    ppSyncService.getDocuments(['POST']).then(function(response) {
      $scope.pins = response;
    });

    ppSyncService.changes().then(function(response) {
      console.log(response);
    }, function(error) {
      console.log(error);
    }, function(change) {
      if ($scope.pins) {
        if (!change.deleted && change.doc.type === 'POST') {
          return $scope.pins.unshift(change);
        }
      }
    });

    $scope.deletePost = function(pin) {
      ppSyncService.deleteDocument(pin.doc).then(function() {});
    };

  });
