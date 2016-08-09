'use strict';

describe('Controller: TicketSettingsCtrl', function () {

  // load the controller's module
  beforeEach(module('sbAdminApp'));

  var TicketSettingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TicketSettingsCtrl = $controller('TicketSettingsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TicketSettingsCtrl.awesomeThings.length).toBe(3);
  });
});
