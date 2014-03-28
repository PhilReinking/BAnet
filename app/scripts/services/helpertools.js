'use strict';

angular.module('banetApp')
  .service('Helpertools', function Helpertools() {

    this.humanize = function(property) {
      return property.replace(/-/g, ' ')
        .replace(/(\w+)/g, function(match) {
          return match.charAt(0).toUpperCase() + match.slice(1);
        });
    };

  });
