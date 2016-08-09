'use strict';

describe('Controller: ContactSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('sbAdminApp'));

  var ContactSettingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactSettingsCtrl = $controller('ContactSettingsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactSettingsCtrl.awesomeThings.length).toBe(3);
  });
});
