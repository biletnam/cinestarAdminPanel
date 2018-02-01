/**
 * Created by !!.Swapnil..Aryan.!! on 23-Oct-16.
 */
'use strict';
angular.module('sbAdminApp')
	.controller('registerController', function($scope, apiKey, admin_login_register, $state, $rootScope){
		$scope.openSignIn = function () {
			$state.go("login");
		};
		$scope.register={
			"firstName":"",
			"lastName":"",
			"emailId":"",
			"password":"",
			"confirm_password":""
		};
		$scope.registerUser = function registerUser(){
			$scope.data = {
				"adminUserName": $scope.register.firstName+ " " +$scope.register.lastName,
				"adminUserEmail": $scope.register.emailId,
				"password":$scope.register.password,
				"confirm_password":$scope.register.confirm_password
			};
			admin_login_register.postRegistration($scope.data).then(function(resolve, reject){
				console.log(resolve,resolve.data.Status);
				console.log(reject);
				if(resolve.data.Status!="Fail"){
					// $rootScope.$broadcast('signinWithSignUp', $scope.data);
					// $rootScope.signinWithSignUp = $scope.data;
					$state.go("login");
				}
			});
		};
	});