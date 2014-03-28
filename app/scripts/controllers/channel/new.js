'use strict';

angular.module('banetApp')
  .controller('ChannelNameNewCtrl', function ($scope, $routeParams, $location, ppSyncService, simpleUser, Helpertools) {

    $scope.channel = {
      name: $routeParams.name,
      humanizedName: Helpertools.humanize($routeParams.name)
    };

    $scope.entry = {
        user: simpleUser.getUserData(),
        type: 'CHANNEL',
        channel: $scope.channel.name
      };

    $scope.isSubmitting = false;

    $scope.newEntry = function() {
      $scope.isSubmitting = true;

      $scope.entry.created = Date.now();

      ppSyncService.post($scope.entry).then(function(response) {
        console.log(response);
        $location.path('channel/'+$scope.channel.name);
      });
    };
  });
