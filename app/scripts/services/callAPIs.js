/**
 * Created by !!.Swapnil..Aryan.!! on 27-Sep-16.
 */
'use strict';
angular.module('sbAdminApp')
.factory('AuthService',
  ['$q', '$timeout', '$http',
  function ($q, $timeout, $http) {

    // create user variable
    var user = null;
	function logout() {

  // create a new instance of deferred
  var deferred = $q.defer();

  // send a get request to the server
  $http.get('/api/logout')
    // handle success
    .success(function (data) {
      user = false;
      deferred.resolve();
    })
    // handle error
    .error(function (data) {
      user = false;
      deferred.reject();
    });

  // return promise object
  return deferred.promise;

}
function login(email, password) {

  // create a new instance of deferred
  var deferred = $q.defer();

  // send a post request to the server
  $http.post('/api/login', {email: email, password: password})
    // handle success
    .success(function (data, status) {
      if(status === 200 && data.result){
        user = true;
        deferred.resolve();
      } else {
        user = false;
        deferred.reject();
      }
    })
    // handle error
    .error(function (data) {
      user = false;
      deferred.reject();
    });

  // return promise object
  return deferred.promise;

}
function isLoggedIn() {
  if(user) {
    return true;
  } else {
    return false;
  }
}
    // return available functions for use in controllers
    return ({
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout
    //   register: register
    });

}])
	.factory('admin_user', function ($q, $http, apiKey, $state) {
		return{
			getAdminUser: function(){
				// return $http.get("" + apiKey.apiUrlFn() + "db/admin/get-admin-user").
				var options = {
			        url: "" + apiKey.apiUrlFn() + "profilee",
			        method: "GET",
			        withCredentials: true,
			        headers: {
			            'Content-Type': 'application/json; charset=utf-8'
			    }};
				return $http(options).
				success(function (data) {
					console.log("++++++++++++++++++++++++++",data);
					return data;
				}).error(function(data){
					console.log("++++++++++++++++++++++++++;;;;;;;;;;;;;;;;;;;",data);
					$state.go('login');
					// return data;
				});
			},
			updateAdminUser: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/update-admin-user", data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}

	})
	.factory('admin_contact_settings', function ($q, $http, apiKey) {
		return{
			getAdminContact: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/setting/contact-setting").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			updateAdminContact: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/setting/contact-setting", data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}

	})
	.factory('admin_location_settings', function ($q, $http, apiKey) {
		return{
			getAdminLocation: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/setting/location-setting").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			updateAdminLocation: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/setting/location-setting", data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}
	})
	.factory('admin_social_settings', function ($q, $http, apiKey) {
		return{
			getAdminSocial: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/setting/social-setting").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			updateAdminSocial: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/setting/social-setting", data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}
	})
	.factory('admin_ticket_settings', function ($q, $http, apiKey) {
		return{
			getAdminTicket: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/setting/ticket-setting").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			updateAdminTicket: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/setting/ticket-setting", data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}
	})
	.factory('admin_screen_settings', function ($q, $http, apiKey) {
		return{
			postAdminScreen: function(data){
				return $http.post("" + apiKey.apiUrlFn() + "db/admin/setting/screen-setting", data).
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			getAdminScreen: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/setting/screen-setting").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			updateAdminScreen: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/setting/screen-setting", data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}
	})
	.factory('admin_site_config', function ($q, $http, apiKey) {
		return{
			getAdminSiteConfig: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/setting/site-config").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			updateAdminSiteConfig: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/setting/site-config", data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}
	})
	.factory('admin_upcoming_movies', function ($q, $http, apiKey) {
		return{
			getAddedMovies: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/added-upcoming-movies").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			getQuickRecommendations: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/recommended-upcoming-movies").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			getAdminUpcomingMovies: function(movieName){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/search-upcoming-movies/"+movieName).
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			updateAdminUpcomingMovies: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/add-upcoming-movies/"+data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}
	})
	.factory('admin_current_movies', function ($q, $http, apiKey) {
		return{
			updateMovieInfo: function(data){
				return $http.put("" + apiKey.apiUrlFn() + "db/admin/update-movie-info",data).
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			getCurrentMovies: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/get-current-movies").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			getScreenForCurrentMovies: function (data) {
				return $http.get(""+ apiKey.apiUrlFn() + "db/admin/get-screen-for-current-movies/"+data).
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			postMovieSchedule:function(data){
				return $http.post(""+ apiKey.apiUrlFn() + "db/admin/post-movie-schedule",data).
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			putMovieSchedule:function(data){
				return $http.post(""+ apiKey.apiUrlFn() + "db/admin/post-movie-schedule",data).
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			getMovieSchedule:function(){
				return $http.get(""+ apiKey.apiUrlFn() + "db/admin/get-movie-schedule").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			deleteShowtime:function(data){
				console.log(data);
				return $http(
					{
						method: 'DELETE',
						url: ""+ apiKey.apiUrlFn() + "db/admin/delete-movie-schedule",
						data: data,
						headers: {'Content-Type': 'application/json;charset=utf-8'}
					}).
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			}
		}
	})
	.factory('admin_login_register', function ($q, $http, apiKey) {
		return{
			postLogin:function(data){
				return $http.post(""+ apiKey.apiUrlFn() + "db/admin/login-admin",data).
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			postRegistration:function(data){
				return $http.post(""+ apiKey.apiUrlFn() + "db/admin/register-admin",data).
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			}
		}
	});
