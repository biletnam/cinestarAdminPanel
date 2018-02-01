'use strict';

describe('Controller: SocialSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('sbAdminApp'));

  var SocialSettingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocialSettingsCtrl = $controller('SocialSettingsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SocialSettingsCtrl.awesomeThings.length).toBe(3);
  });
});
