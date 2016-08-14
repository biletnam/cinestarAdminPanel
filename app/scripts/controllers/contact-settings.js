'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:ContactSettingsCtrl
 * @description
 * # ContactSettingsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ContactSettingsCtrl', function ($scope) {
      $scope.currentContact={
          contactName:"Cinestar",
          contactEmail:"cinestar@mail.com",
          contactPhone:"879865"
      };

  });
