'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:UpcomingMoviesCtrl
 * @description
 * # UpcomingMoviesCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('UpcomingMoviesCtrl', function ($scope, $http, apiKey, $q, admin_upcoming_movies, admin_current_movies) {
        $scope.imagePath = config.imagePath;
        $scope.typedMovie = "";
        $scope.movieId = null;
        $scope.selectedMovie = null;
        $scope.showMovieSuggestions = function showMovieSuggestions(movieName) {
            return admin_upcoming_movies.getAdminUpcomingMovies(movieName).then(function (response) {
                $scope.searchedMovie = response.data.data;
                // $scope.movieId = $scope.searchedMovie[0].upMovieId;
                return $scope.searchedMovie;
            });
        };

        $scope.quickMovieSuggestions = function quickMovieSuggestions() {
            admin_upcoming_movies.getQuickRecommendations().then(function (response) {
                $scope.quickRecommendations = response.data.data;
                for (var i=0;i<$scope.quickRecommendations.length;i++) {
                    $scope.quickRecommendations[i].upPosterPath = $scope.quickRecommendations[i].upPosterPath.replace('/images/upcoming/', config.imageSize);
                }
            });
        };
        $scope.quickMovieSuggestions();
        $scope.updateMovie = function updateMovie(data) {
            var postParams = {
                movieID : data.id,
                movieName : data.title,
                movieReleaseDate : data.release_date,
                moviePoster: data.poster_path
            };

            admin_upcoming_movies.addAdminUpcomingMovies(postParams).then(function () {
                $scope.addedMovies();
            });
        };

        // $scope.updatedMovie = function updateMovie(data) {
        //     console.log(data);
        //     admin_upcoming_movies.updateAdminUpcomingMovies(data).then(function (data) {
        //         $scope.addedMovies();
        //         $scope.quickMovieSuggestions();
        //     });
        // };

        $scope.removeUpComingMovies = function (movieID) {
            admin_upcoming_movies.removeUpComingMovies(movieID).then(function () {
                $scope.addedMovies();
            })
        };

        $scope.addedMovies = function addedMovies() {
            admin_upcoming_movies.getAddedMovies().then(function (response) {
                $scope.addedMoviesList = response.data.data;
                for (var i=0;i<$scope.addedMoviesList.length;i++) {
                    $scope.addedMoviesList[i].upPosterPath = $scope.addedMoviesList[i].upPosterPath.replace('/images/upcoming/', config.imageSize);
                }
            });
        };
        $scope.addedMovies();

        $scope.clickedMovie = function clickedMovie(index) {
            $scope.showClickedMovie = $scope.addedMoviesList[index];
            console.log("qwerty", $scope.addedMoviesList[index]);
        };

        $scope.addToCurrent = function (movieID) {
	  		admin_upcoming_movies.moveToCurrent(movieID).then(function () {
                $scope.removeUpComingMovies(movieID);
            });
        };

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
    });
