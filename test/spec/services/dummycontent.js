'use strict';

describe('Service: dummyContent', function () {

  // load the service's module
  beforeEach(module('banetApp'));

  // instantiate service
  var dummyContent;
  beforeEach(inject(function (_dummyContent_) {
    dummyContent = _dummyContent_;
  }));

  it('should do something', function () {
    expect(!!dummyContent).toBe(true);
  });

});
