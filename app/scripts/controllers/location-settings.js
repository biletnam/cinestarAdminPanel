'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:LocationSettingsCtrl
 * @description
 * # LocationSettingsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('LocationSettingsCtrl', function ($scope) {
    $scope.currentLocation={
        theatreName:"Cinestar",
        physicalAddress:"Huntsville",
        mailingAddress:"cinestar@mail.com"
    };
  });
