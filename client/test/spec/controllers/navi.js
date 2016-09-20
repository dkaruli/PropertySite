'use strict';

describe('Controller: NaviCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var NaviCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NaviCtrl = $controller('NaviCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NaviCtrl.awesomeThings.length).toBe(3);
  });
});
