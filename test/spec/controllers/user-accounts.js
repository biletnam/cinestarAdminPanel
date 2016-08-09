'use strict';

describe('Controller: UserAccountsCtrl', function () {

  // load the controller's module
  beforeEach(module('sbAdminApp'));

  var UserAccountsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserAccountsCtrl = $controller('UserAccountsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserAccountsCtrl.awesomeThings.length).toBe(3);
  });
});
