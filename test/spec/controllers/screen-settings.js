'use strict';

describe('Controller: ScreenSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('sbAdminApp'));

  var ScreenSettingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScreenSettingsCtrl = $controller('ScreenSettingsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScreenSettingsCtrl.awesomeThings.length).toBe(3);
  });
});
