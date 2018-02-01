'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:SocialSettingsCtrl
 * @description
 * # SocialSettingsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('SocialSettingsCtrl', function ($scope, apiKey, admin_social_settings) {
      admin_social_settings.getAdminSocial().then(function(data){
          var result = data.data;
		  console.log(result);
          $scope.currentSocial = {
              socialID:result.socialID,
              socialFacebook:result.socialFacebook,
              socialTwitter:result.socialTwitter
          };
      });
      $scope.updateDetails = function updateDetails(){
          $scope.updateData={
              "socialID": $scope.currentSocial.socialID,
              "socialFacebook": $scope.adminSocial.socialFacebook,
              "socialTwitter": $scope.adminSocial.socialTwitter
          };
          admin_social_settings.updateAdminSocial($scope.updateData).then(function (data) {
              console.log(data);
			  $scope.currentSocial = $scope.updateData;
          });
      };
  });
