'use strict';

describe('Service: simpleUser', function () {

  // load the service's module
  beforeEach(module('banetApp'));

  // instantiate service
  var simpleUser;
  beforeEach(inject(function (_simpleUser_) {
    simpleUser = _simpleUser_;
  }));

  it('should do something', function () {
    expect(!!simpleUser).toBe(true);
  });

});
