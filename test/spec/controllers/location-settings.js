'use strict';

describe('Controller: LocationSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('sbAdminApp'));

  var LocationSettingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocationSettingsCtrl = $controller('LocationSettingsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LocationSettingsCtrl.awesomeThings.length).toBe(3);
  });
});
