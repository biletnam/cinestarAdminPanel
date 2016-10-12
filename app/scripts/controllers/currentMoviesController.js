/**
 * Created by !!.Swapnil..Aryan.!! on 08-Aug-16.
 */
'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
	.controller('currentMoviesController', function($scope,$position) {
		$scope.commercialBreak=["5","10","15","20","25"];
		$scope.cleanBreak=["5","10","15","20","25"];
		$scope.actions=["Add","remove"];
		$scope.screens=["Screen_1","Screen_2","Screen_3","Screen_4"];
		$scope.dataScreens = [];
		$scope.years = [];
		$scope.years.push(new Date().getFullYear());
		$scope.months=[];
		$scope.showtimeType = "";
		for(var i=1;i<=12;i++){
			$scope.months.push(i);
		}
		$scope.startTime="";
		$scope.st = function st(data){
			$scope.startTime =  data;
			console.log($scope.startTime);
			$scope.addMoviesToScreen();
		};
		$scope.showtimeDate="";
		$scope.sd = function rr(date){
			$scope.showtimeDate=date;
		};
		$scope.endTime = "";

		$scope.addMoviesToScreen = function addMoviesToScreen() {
			var cal = $scope.startTime.split(':');
			console.log(cal,$scope.showtimeType);
		};
		$scope.organiseScreens = [{
			screenName:"Screen 1",
			details:[{
				movieName:"Batman",
				startTime:"9:00",
				endTime:"12:30",
				type:"3D"
			},{
				movieName:"Superman",
				startTime:"9:00",
				endTime:"12:30",
				type:"2D"
			}]
		},{
			screenName:"Screen 2",
			details:[{
				movieName:"Batman 2 ",
				startTime:"9:00",
				endTime:"12:30",
				type:"3D"
			},{
				movieName:"Superman 2 ",
				startTime:"9:00",
				endTime:"12:30",
				type:"3D"
			},{
				movieName:"Batman 3 ",
				startTime:"9:00",
				endTime:"12:30",
				type:"3D"
			},{
				movieName:"Superman 3 ",
				startTime:"9:00",
				endTime:"12:30",
				type:"3D"
			}]
		}];

		// for(var i=0;i<$scope.screens.length;i++){
		// 	$scope.organiseScreens = {
		// 		screenName:"",
		// 		details:[{
		// 			movieName:"",
		// 			startTime:"",
		// 			endTime:""
		// 		}]
		// 	};
		// 	$scope.organiseScreens.screenName = $scope.screens[i];
		// 	$scope.dataScreens.push($scope.organiseScreens);
		// }
		console.log($scope.organiseScreens);
		// $scope.data = [{
		// 	id:"odd",
		// 	screen:"Screen 1",
		// 	details:{
		// 		movieName:"Batman",
		// 		startTime:"9:00",
		// 		endTime:"12:30"
		// 	}
		// },{
		// 	id:"even",
		// 	screen:"Screen 2",
		// 	details:{
		// 		movieName:"Batman",
		// 		startTime:"9:00",
		// 		endTime:"12:30"
		// 	}
		// }
		// ];

	});
