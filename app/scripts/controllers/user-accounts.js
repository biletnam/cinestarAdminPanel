'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:UserAccountsCtrl
 * @description
 * # UserAccountsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('UserAccountsCtrl', function ($scope) {
		$scope.userAccounts = {
			username:"Cinestar User",
			email:"cinestar@cinestar.com",
			password:"cinestar"
		};
  });
