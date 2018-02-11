'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:UserAccountsCtrl
 * @description
 * # UserAccountsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('UserAccountsCtrl', function ($scope, apiKey, admin_user) {
        $scope.confirmPassword = null;
        $scope.newPassword = null;
        $scope.userAccounts = {};
        var adminUserDetails;
        admin_user.getAdminUser().then(function(response){
            adminUserDetails = response.data.data;
            $scope.userAccounts = {
                username:response.data.data.adminUserName,
                email:response.data.data.adminUserEmail
            };
        });
        $scope.updateDetails = function updateDetails(){
            $scope.updateData={
                "adminUserID": adminUserDetails.adminUserID,
                "adminUserName": adminUserDetails.adminUserName,
                "adminUserEmail": adminUserDetails.adminUserEmail,
                "password": $scope.newPassword,
                "confirmPassword":$scope.confirmPassword
            };
            admin_user.updateAdminUser($scope.updateData).then(function () {
                $scope.confirmPassword = null;
                $scope.newPassword = null;
            });
        }
    });
