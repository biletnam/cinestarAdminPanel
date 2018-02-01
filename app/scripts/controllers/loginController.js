/**
 * Created by !!.Swapnil..Aryan.!! on 23-Oct-16.
 */
'use strict';
angular.module('sbAdminApp')
	.controller('loginController', function($scope, apiKey, $stateParams, admin_login_register, $state, $cookieStore, $rootScope){
		$scope.openSignUp = function () {
			$state.go("register");
		};
		$scope.register = {"emailId":"","password": ""};
		$scope.$on("signinWithSignUp", function (event, data) {
			console.log("---------------------",data);
			$scope.register.emailId = data.adminUserEmail;
			$scope.register.password = data.password;
			$scope.signinUser();
		}); 
		$scope.signinUser = function signinUser(){
			$scope.data = {
				"adminUserEmail": $scope.register.emailId,
				"password":$scope.register.password
			};
			admin_login_register.postLogin($scope.data).then(function(resolve, reject){
				console.log(resolve);
				console.log(reject);
				if(resolve.data.Status!="Fail"){
					$state.go("dashboard.home");
					$scope.userLoggedIn = true;
					$cookieStore.put('userLogin', $scope.register.emailId);
					// $rootScope.$broadcast('userLoggedin', $scope.register.emailId);
				}else{
					$scope.userLoggedIn = false;
				}
			});
		}
	});