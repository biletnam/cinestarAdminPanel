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
	  admin_user.getAdminUser().then(function(data){
		  var result = data.data.Message;
		  $scope.adminUserDetails = result;
		  $scope.userAccounts = {
			  username:result.adminUserName,
			  email:result.adminUserEmail
		  };
		  // console.log(result);
		  // console.log(data);
	  });
	  $scope.updateDetails = function updateDetails(){
		  $scope.updateData={
			  "adminUserID": $scope.adminUserDetails.adminUserID,
			  "adminUserName": $scope.adminUserDetails.adminUserName,
			  "adminUserEmail": $scope.adminUserDetails.adminUserEmail,
			  "password": $scope.newPassword,
			  "confirm_password":$scope.confirmPassword
		  };
		  console.log("Update button clicked", $scope.updateData);
		  admin_user.updateAdminUser($scope.updateData).then(function (data) {
			  console.log(data);
		  });
	  }
  });
