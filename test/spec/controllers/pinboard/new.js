'use strict';

describe('Controller: PinboardNewCtrl', function () {

  // load the controller's module
  beforeEach(module('banetApp'));

  var PinboardNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PinboardNewCtrl = $controller('PinboardNewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
