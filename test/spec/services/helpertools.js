'use strict';

describe('Service: Helpertools', function () {

  // load the service's module
  beforeEach(module('banetApp'));

  // instantiate service
  var Helpertools;
  beforeEach(inject(function (_Helpertools_) {
    Helpertools = _Helpertools_;
  }));

  it('should do something', function () {
    expect(!!Helpertools).toBe(true);
  });

});
