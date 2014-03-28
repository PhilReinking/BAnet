'use strict';

angular.module('banetApp')
  .controller('DashboardCtrl', function($scope, ppSyncService, dummyContent, simpleUser) {


    $scope.loadUserData = function() {
      if ($scope.userIsOnline()) {
        $scope.user = simpleUser.getUserData();
      }
    };

    $scope.login = function() {
      // Set the online flag to true
      $scope.user.online = true;
      simpleUser.login($scope.user);
    };

    $scope.logout = function() {
      $scope.user = simpleUser.logout();
    };

    $scope.userIsOnline = function() {
      return simpleUser.isOnline();
    };




    $scope.debug = {
      user: function() {
        console.log('This is the current User Object:');
        console.log(simpleUser.getUserData());
      },

      // Debug Functions related to the Database
      database: {
        debug: function() {
          ppSyncService.debug().then(function(response) {
            $scope.dbinfo = response;
            console.log(response);
          });
        },

        postBatch: function() {

          // Batch Process Posts
          $scope.batch = {
            current: 0,
            failures: 0,
            target: 100
          };

          var recursivePost = function() {
            var testObject = {
              category: dummyContent.getDummyCategory(),
              msg: dummyContent.getDummyPost(),
              //created: Date.now() - (Math.floor(Math.random()*10000000*($scope.batch.current/10))),
              created: Date.now(),
              user: {
                id: 9999,
                name: dummyContent.getDummyUser()
              },
              type: 'POST',
            };

            ppSyncService.post(testObject).then(function() {
              if ($scope.batch.current < $scope.batch.target) {
                $scope.batch.current++;
                recursivePost();
              }
            }, function(error) {
              $scope.batch.failures++;
              console.log(error);
              recursivePost();
            });
          };

          recursivePost();

        },

        destroy: function() {
          ppSyncService.reset();
        }
      }
    };
  });
