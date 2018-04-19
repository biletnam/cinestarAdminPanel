'use strict';

/**
 * @ngdoc service
 * @name sbAdminApp.apiKey
 * @description
 * # apiKey
 * Service in the sbAdminApp.
 */
angular.module('sbAdminApp')
	.service('apiKey', function ($location,$http,$q) {
		// AngularJS will instantiate a singleton by calling "new" on this function
		var apiUrl = "";
		var image = "";
		return {
			key: '2c9306d42037dfb0de0fc3f153819054',
			movieApiUrl: 'http://api.themoviedb.org/3/',
			apiUrlFn: function(){
				if($location.host()=='localhost')
				{
					apiUrl = "http://localhost:8000/api/";
				}
				else {
					// apiUrl = "http://cinestar.affpc.com:8080/api/";
					apiUrl = config.baseUrl;//"http://18.218.55.255:8000/api/";
				}
				return apiUrl;
			},
			imagePath: function () {
				if($location.host()=='localhost')
				{
					image = "http://127.0.0.5/";
				}
				else {
					image = config.baseUrl;//"http://18.218.55.255:8000/";
				}
				return image;
			}
		};
		// this.items="hello Swapnil";
	});
