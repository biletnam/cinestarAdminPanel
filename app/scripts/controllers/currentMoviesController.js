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
	.controller('currentMoviesController', function($scope,apiKey,admin_current_movies) {
		$scope.movieListName="";
		admin_current_movies.getCurrentMovies().then(function(response){
			$scope.movieList=response.data;
			console.log(response.data);
		});
		$scope.dataScreens="";
		$scope.getScreen = function getScreen(data){
			admin_current_movies.getScreenForCurrentMovies(data).then(function(data){
				$scope.dataScreens = data.data;
				console.log(data.data,$scope.selectedScreen,$scope.showtimeType);
			});
		};
		$scope.selectedScreen="";
		$scope.movieDuration="";
		$scope.movieInTheatres="";
		$scope.selectedMovie = function selectedMovie(){
			$scope.movieDuration=$scope.movieListName.infoMovieRuntime;
			$scope.movieInTheatres=$scope.movieListName.infoMovieInTheatres;
			console.log($scope.movieListName);
		};
		$scope.commercialBreak=["5","10","15","20","25"];
		$scope.commBreak="";
		$scope.clnBreak="";
		$scope.cleanBreak=["5","10","15","20","25"];
		$scope.actions=["Add","remove"];
		$scope.showtimeType = "";
		$scope.startTime="";
		$scope.st = function st(data){
			$scope.startTime =  data;
			console.log($scope.startTime);
		};
		$scope.showtimeDate="";
		$scope.sd = function rr(date){
			$scope.showtimeDate=date;
		};
		$scope.endTime = 0;

		$scope.addMoviesToScreen = function addMoviesToScreen() {
			var cal = $scope.startTime.split(':');
			// Calculation of End Time
			if($scope.movieDuration!='N/A'){
				var quo = (parseInt(($scope.movieDuration.replace('min','')))+parseInt($scope.clnBreak)+parseInt($scope.commBreak))/60;
				var rem = (parseInt(($scope.movieDuration.replace('min','')))+parseInt($scope.clnBreak)+parseInt($scope.commBreak))%60;
				var endTimeHour = (Math.floor(parseInt(cal[0])+quo));
				var endTimeMinute = (Math.floor(parseInt(cal[1])+rem));
				if(endTimeMinute>60){
					endTimeHour = endTimeHour+Math.floor(endTimeMinute/60);
					endTimeMinute = endTimeMinute%60;
				}
				if(endTimeHour>24){
					endTimeHour = endTimeHour%24;
				}
				$scope.endTime = endTimeHour+":"+endTimeMinute;
				console.log($scope.endTime);
			}
			// End Calculation
			var data = {
				"movieImdbID":$scope.movieListName.infoImdbID,
				"movieType":$scope.showtimeType,
				"movieScreen":$scope.selectedScreen.screenName,
				"movieShowDate":$scope.showtimeDate,
				"movieStartTime":$scope.startTime,
				"movieEndTime":$scope.endTime
			};
			console.log(data);
			admin_current_movies.postMovieSchedule(data).then(function (response) {
				console.log(response);
				$scope.movieListName=null;
				$scope.showtimeType=null;
				$scope.selectedScreen=null;
				$scope.showtimeDate=null;
				$scope.startTime=null;
				$scope.endTime=null;
			});
		};
		// $scope.organiseScreens = [{
		// 	screenName:"Screen 1",
		// 	details:[{
		// 		movieName:"Batman",
		// 		startTime:"9:00",
		// 		endTime:"12:30",
		// 		type:"3D"
		// 	},{
		// 		movieName:"Superman",
		// 		startTime:"9:00",
		// 		endTime:"12:30",
		// 		type:"2D"
		// 	}]
		// },{
		// 	screenName:"Screen 2",
		// 	details:[{
		// 		movieName:"Batman 2 ",
		// 		startTime:"9:00",
		// 		endTime:"12:30",
		// 		type:"3D"
		// 	},{
		// 		movieName:"Superman 2 ",
		// 		startTime:"9:00",
		// 		endTime:"12:30",
		// 		type:"3D"
		// 	},{
		// 		movieName:"Batman 3 ",
		// 		startTime:"9:00",
		// 		endTime:"12:30",
		// 		type:"3D"
		// 	},{
		// 		movieName:"Superman 3 ",
		// 		startTime:"9:00",
		// 		endTime:"12:30",
		// 		type:"3D"
		// 	}]
		// }];

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
		// console.log($scope.organiseScreens);
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
