'use strict';

describe('Service: Md5', function () {

  // load the service's module
  beforeEach(module('banetApp'));

  // instantiate service
  var Md5;
  beforeEach(inject(function (_Md5_) {
    Md5 = _Md5_;
  }));

  it('should do something', function () {
    expect(!!Md5).toBe(true);
  });

});
