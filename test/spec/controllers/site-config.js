'use strict';

describe('Controller: SiteConfigCtrl', function () {

  // load the controller's module
  beforeEach(module('sbAdminApp'));

  var SiteConfigCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SiteConfigCtrl = $controller('SiteConfigCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SiteConfigCtrl.awesomeThings.length).toBe(3);
  });
});
