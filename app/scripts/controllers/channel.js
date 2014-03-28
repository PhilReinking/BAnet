'use strict';

angular.module('banetApp')
  .controller('ChannelCtrl', function($scope, $routeParams, $location, ppSyncService, Helpertools) {

    $scope.channel = {
      name: $routeParams.name.toLowerCase(),
      humanizedName: Helpertools.humanize($routeParams.name.toLowerCase())
    };

    ppSyncService.getChannelStream($scope.channel.name).then(function(response) {
      $scope.entries = response;
    });

    ppSyncService.fetchChanges().then(function(response) {
      console.log(response);
    }, function(error) {
      console.log(error);
    }, function(change) {
      if (change.doc.type === 'CHANNEL' && change.doc.channel === $scope.channel.name) {
        if ($scope.entries) {
          return !change.deleted ? $scope.entries.unshift(change) : false;
        }
      }
    });

    $scope.switchChannel = function() {
      $location.path('channel/' + $scope.newChannel.toLowerCase());
    };

  });