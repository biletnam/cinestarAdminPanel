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
    .controller('currentMoviesController', function ($scope, apiKey, admin_current_movies, toastr, admin_upcoming_movies) {
        $scope.movieListName = "";
        $scope.buyTicketButtonValue = false;
        $scope.buyTicketButton = function buyTicketButton(response) {
            console.log(response);
        };
        function getCurrentMovies() {
            admin_current_movies.getCurrentMovies().then(function (response) {
                $scope.movieList = response.data.data;
            });
        }
        getCurrentMovies();

        $scope.dataScreens = "";
        $scope.getScreen = function getScreen(data) {
            admin_current_movies.getScreenForCurrentMovies(data).then(function (response) {
                $scope.dataScreens = response.data.data;
            });
        };
        $scope.selectedScreen = "";
        $scope.movieDuration = "";
        $scope.movieInTheatres = "";
        $scope.selectedMovie = function selectedMovie() {
            $scope.movieDuration = $scope.movieListName.infoMovieRuntime;
            $scope.movieInTheatres = $scope.movieListName.infoMovieInTheatres;
        };
        $scope.commercialBreak = ["5", "10", "15", "20", "25"];
        $scope.commBreak = "";
        $scope.clnBreak = "";
        $scope.cleanBreak = ["5", "10", "15", "20", "25"];
        $scope.actions = ["Add", "remove"];
        $scope.showtimeType = "";
        $scope.startTime = null;
        $scope.st = function st(data) {
            $scope.startTime = data;
        };
        $scope.showtimeDate = "";
        $scope.sd = function rr(date) {
            $scope.showtimeDate = date;
        };
        $scope.endTime = 0;

        $scope.addMoviesToScreen = function addMoviesToScreen() {
            // $scope.startTime = $scope.startTime.getHours()+":"+$scope.startTime.getMinutes();
            // console.log("Start Time ",$scope.startTime);
            var cal = $scope.startTime.split(':');
            // Calculation of End Time
            if ($scope.movieDuration != 'N/A') {
                var quo = (parseInt(($scope.movieDuration.replace('min', ''))) + parseInt($scope.clnBreak) + parseInt($scope.commBreak)) / 60;
                var rem = (parseInt(($scope.movieDuration.replace('min', ''))) + parseInt($scope.clnBreak) + parseInt($scope.commBreak)) % 60;
                var endTimeHour = (Math.floor(parseInt(cal[0]) + quo));
                var endTimeMinute = (Math.floor(parseInt(cal[1]) + rem));
                if (endTimeMinute > 60) {
                    endTimeHour = endTimeHour + Math.floor(endTimeMinute / 60);
                    endTimeMinute = endTimeMinute % 60;
                }
                if (endTimeHour > 24) {
                    endTimeHour = endTimeHour % 24;
                }
                $scope.endTime = endTimeHour + ":" + endTimeMinute;
            }
            // End Calculation
            var data = {
                "movieImdbID": $scope.movieListName.infoImdbID,
                "movieType": $scope.showtimeType,
                "movieScreen": $scope.selectedScreen.screenName,
                "movieShowDate": $scope.showtimeDate,
                "movieStartTime": $scope.startTime,
                "movieEndTime": $scope.endTime
            };
            console.log("Posting data", data, $scope.buyTicketButtonValue);
            // Not required as of now
            // var d_data = {
            // 	"movieImdbID":$scope.movieListName.infoImdbID,
            // 	"buyTicketButtonValue":($scope.buyTicketButtonValue)?1:0
            // };
            // admin_current_movies.updateMovieInfo(d_data).then(function(response){
            // 	console.log("Buy Button Taken Care Of");
            // });
            admin_current_movies.postMovieSchedule(data).then(function (response) {
                $scope.movieListName = null;
                $scope.showtimeType = null;
                $scope.selectedScreen = null;
                $scope.showtimeDate = null;
                $scope.startTime = null;
                $scope.endTime = null;
                admin_current_movies.getCurrentMovies().then(function (response) {
                    $scope.movieList = response.data.data;
                    $scope.getMoviesSchedules();
                });
            });
        };
        $scope.updateMoviesToScreen = function updateMoviesToScreen() {
            console.log($scope.updateMovieShowtime);
            // var cal = $scope.startTime.split(':');
            // // Calculation of End Time
            // if($scope.movieDuration!='N/A'){
            // 	var quo = (parseInt(($scope.movieDuration.replace('min','')))+parseInt($scope.clnBreak)+parseInt($scope.commBreak))/60;
            // 	var rem = (parseInt(($scope.movieDuration.replace('min','')))+parseInt($scope.clnBreak)+parseInt($scope.commBreak))%60;
            // 	var endTimeHour = (Math.floor(parseInt(cal[0])+quo));
            // 	var endTimeMinute = (Math.floor(parseInt(cal[1])+rem));
            // 	if(endTimeMinute>60){
            // 		endTimeHour = endTimeHour+Math.floor(endTimeMinute/60);
            // 		endTimeMinute = endTimeMinute%60;
            // 	}
            // 	if(endTimeHour>24){
            // 		endTimeHour = endTimeHour%24;
            // 	}
            // 	$scope.endTime = endTimeHour+":"+endTimeMinute;
            // }
            // // End Calculation
            // var data = {
            // 	"movieImdbID":$scope.movieListName.infoImdbID,
            // 	"movieType":$scope.showtimeType,
            // 	"movieScreen":$scope.selectedScreen.screenName,
            // 	"movieShowDate":$scope.showtimeDate,
            // 	"movieStartTime":$scope.startTime,
            // 	"movieEndTime":$scope.endTime
            // };
            // admin_current_movies.putMovieSchedule(data).then(function (response) {
            // 	// console.log(response);
            // 	admin_current_movies.getCurrentMovies().then(function(response){
            // 		$scope.movieList=response.data;
            // 		$scope.getMoviesSchedules();
            // 	});
            // });
        };


        $scope.getMoviesSchedules = function () {
            admin_current_movies.getMovieSchedule().then(function (response) {
                $scope.showAdedMovies = response.data.data;
                $scope.updateMovieShowtime = response.data.data;
                $scope.organiseScreens = [];
                var screens = [];
                for (var i = 0; i < response.data.data.length; i++) {
                    var temp = {
                        details: []
                    };
                    var index = screens.indexOf($scope.showAdedMovies[i].movieScreen);
                    if (index == -1) {
                        screens.push($scope.showAdedMovies[i].movieScreen);
                        temp.screenName = $scope.showAdedMovies[i].movieScreen;
                        temp.details.push({
                            movieName: $scope.showAdedMovies[i].infoMovieName,
                            startTime: $scope.showAdedMovies[i].movieStartTime,
                            endTime: $scope.showAdedMovies[i].movieEndTime,
                            type: $scope.showAdedMovies[i].movieType,
                            movieShowDate: $scope.showAdedMovies[i].movieShowDate
                        });
                        $scope.organiseScreens.push(temp);
                    } else {
                        // Find the screen in organiseScreen
                        for (var x = 0; x < $scope.organiseScreens.length; x++) {
                            if ($scope.organiseScreens[x].screenName == screens[index]) {
                                $scope.organiseScreens[x].screenName = $scope.showAdedMovies[i].movieScreen;
                                $scope.organiseScreens[x].details.push({
                                    movieName: $scope.showAdedMovies[i].infoMovieName,
                                    startTime: $scope.showAdedMovies[i].movieStartTime,
                                    endTime: $scope.showAdedMovies[i].movieEndTime,
                                    type: $scope.showAdedMovies[i].movieType,
                                    movieShowDate: $scope.showAdedMovies[i].movieShowDate
                                });
                            }
                        }
                    }
                }
            });
        };

        $scope.deleteMovieSchedule = function deleteMovieSchedule(data, data1) {
            $scope.dataCondition = {
                "movieScreen": data.screenName,
                "movieEndTime": data1.endTime,
                "movieShowDate": data1.movieShowDate,
                "movieStartTime": data1.startTime,
                "movieType": data1.type
            };
            admin_current_movies.deleteShowtime($scope.dataCondition).then(function (response) {
                $scope.getMoviesSchedules();
            });
        };
        $scope.getMoviesSchedules();

        $scope.movieToBeSearched = {
            name: null,
            year: parseInt(moment().format('YYYY'))
        };
        $scope.searchResults = null;
        $scope.searchMovie = function () {
            var postData = {
                query: $scope.movieToBeSearched.name,
                year: $scope.movieToBeSearched.year
            };
            if (!postData.query) {
                toastr.error("Query can't be empty");
                return;
            }
            admin_current_movies.searchMovies(postData).then(function (response) {
                $scope.searchResults = response.data.data;
                if ($scope.searchResults.results.length < 1) {
                    toastr.info("Movie not found!");
                    $scope.movieToBeSearched.name = null;
                } else {
                    for (var i = 0; i < $scope.searchResults.results.length; i++) {
                        $scope.searchResults.results[i].poster_path = config.imagePath + config.imageSize + $scope.searchResults.results[i].poster_path;
                    }
                }
            });
        };

        $scope.addToCurrent = function (movieID) {
            admin_upcoming_movies.moveToCurrent(movieID).then(function () {
                getCurrentMovies();
            });
        };
    });
