'use strict';

angular.module('banetApp')
  .factory('simpleUser', function (Md5) {
    // Service logic
    // ...

    var currentUser = {
      email: '',
      name: '',
      id: '',
      online: false
    };

    var init = function(){
      var retrievedObject = JSON.parse(localStorage.getItem('currentUser'));
      if (retrievedObject === null){
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
    };
    init();

    // Public API here
    return {
      login: function (userData) {
        currentUser = userData;
        currentUser.id = Md5.MD5(currentUser.email);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      },

      logout: function () {
        currentUser = {
          email: '',
          name: '',
          id: '',
          online: false
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        return currentUser;
      },

      isOnline: function() {
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser.online;
      },

      getUserData: function() {
        return JSON.parse(localStorage.getItem('currentUser'));
      },

      getGravatarUrl: function(email, size) {
        size = size || 80;
        return 'http://www.gravatar.com/avatar/' + Md5.MD5(email) + '.jpg?s=' + size;
      }
    };
  });
