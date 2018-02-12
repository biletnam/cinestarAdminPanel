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
        function initializeSocialDetails() {
            $scope.adminSocial = {
                socialFacebook: null,
                socialTwitter: null
            };
        }

        initializeSocialDetails();
        admin_social_settings.getAdminSocial().then(function (response) {
            var result = response.data.data;
            $scope.currentSocial = {
                socialID: result.socialID,
                socialFacebook: result.socialFacebook,
                socialTwitter: result.socialTwitter
            };
        });
        $scope.updateDetails = function updateDetails() {
            $scope.updateData = {
                "socialID": $scope.currentSocial.socialID,
                "socialFacebook": $scope.adminSocial.socialFacebook,
                "socialTwitter": $scope.adminSocial.socialTwitter
            };
            admin_social_settings.updateAdminSocial($scope.updateData).then(function () {
                $scope.currentSocial = $scope.updateData;
                initializeSocialDetails();
            });
        };
    });
