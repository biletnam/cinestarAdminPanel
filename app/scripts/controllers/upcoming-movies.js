'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:UpcomingMoviesCtrl
 * @description
 * # UpcomingMoviesCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('UpcomingMoviesCtrl', function ($scope, apiKey, admin_upcoming_movies) {
      $scope.typedMovie = "";
	  $scope.showMovieSuggestions = function showMovieSuggestions(movieName){
		  // $scope.movies=["aaa","bbb","ccc"];
		  if(movieName!='' || movieName!=null || movieName!= undefined){
			  admin_upcoming_movies.getAdminUpcomingMovies(movieName).then(function(data){
				  $scope.searchedMovie = [];
				  for(var i=0;i<data.data.length;i++){
					  $scope.searchedMovie.push(data.data[i].upMovieName);
				  }
				  console.log($scope.searchedMovie, data.data.length, $scope.typedMovie);
			  });
		  }

	  };
	  $scope.upMovies = [{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"},{
          movieName:"Shawshank",
          releaseDate:"12-02-2015"}];
  });