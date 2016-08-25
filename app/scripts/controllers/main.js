'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl',  ['$scope', function($scope) {
	  $scope.line = {
		  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		  series: ['2D', '3D'],
		  data: [
			  [65, 59, 80, 81, 56, 55, 40],
			  [18, 38, 30, 9, 76, 17, 80]
		  ],
		  onClick: function (points, evt) {
			  console.log(points, evt);
		  }
	  };
  }]);
