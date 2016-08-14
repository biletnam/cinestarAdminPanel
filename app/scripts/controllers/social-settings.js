'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:SocialSettingsCtrl
 * @description
 * # SocialSettingsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('SocialSettingsCtrl', function ($scope) {
    $scope.social={
        facebookLink:"facebook/cinestar",
        twitterLink:"twitter/cinestar"
    };
  });
