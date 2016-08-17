'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:ScreenSettingsCtrl
 * @description
 * # ScreenSettingsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ScreenSettingsCtrl', function ($scope) {
    $scope.screenDetails = [
        {
            screenName:"Screen 1",
            screenView:["2D","3D"],
            screenSeats:"200"
        },
        {
            screenName:"Screen 2",
            screenView:["2D"],
            screenSeats:"100"
        },{
            screenName:"Screen 2A",
            screenView:["3D"],
            screenSeats:"500"
        }];
  });