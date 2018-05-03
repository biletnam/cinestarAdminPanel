/**
 * Created by !!.Swapnil..Aryan.!! on 27-Sep-16.
 */
'use strict';
function commonHTTPCall($http, params, toastr, successMsg, errorMsg) {
    if (successMsg === undefined) {
        successMsg = true;
    }
    if (errorMsg === undefined) {
        errorMsg = true
    }

    params.withCredentials = true;

    return $http(params)
        .success(function (response) {
            if (successMsg) {
                toastr.success(response.message);
            }
            return response;
        })
        .error(function (response, status) {
            if (status === 401) {
                window.location.replace('/#/login');
                window.location.reload();
            }
            if (errorMsg) {
                toastr.error(response.error.message);
            }
            return response;
        });
}

angular.module('sbAdminApp')
    .factory('admin_user', function ($q, $http, toastr) {
        return {
            getAdminUser: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/userDetails"
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            updateAdminUser: function (data) {
                var req = {
                    method: 'PUT',
                    url: config.apiUrl + "/admin/updateUser",
                    data: data
                };
                return commonHTTPCall($http, req, toastr, true);
            }
        }

    })
    .factory('admin_contact_settings', function ($q, $http, toastr) {
        return {
            getAdminContact: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/contact"
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            updateAdminContact: function (data) {
                var req = {
                    method: 'PUT',
                    url: config.apiUrl + "/admin/contact",
                    data: data
                };
                return commonHTTPCall($http, req, toastr, true);
            }
        }

    })
    .factory('admin_location_settings', function ($q, $http, toastr) {
        return {
            getAdminLocation: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/location"
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            updateAdminLocation: function (data) {
                var req = {
                    method: 'PUT',
                    url: config.apiUrl + "/admin/location",
                    data: data
                };
                return commonHTTPCall($http, req, toastr, true);
            }
        }
    })
    .factory('admin_social_settings', function ($q, $http, toastr) {
        return {
            getAdminSocial: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/social"
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            updateAdminSocial: function (data) {
                var req = {
                    method: 'PUT',
                    url: config.apiUrl + "/admin/social",
                    data: data
                };
                return commonHTTPCall($http, req, toastr, true);
            }
        }
    })
    .factory('admin_ticket_settings', function ($q, $http, toastr) {
        return {
            getAdminTicket: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/ticket"
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            updateAdminTicket: function (data) {
                var req = {
                    method: 'PUT',
                    url: config.apiUrl + "/admin/ticket",
                    data: data
                };
                return commonHTTPCall($http, req, toastr, true);
            }
        }
    })
    .factory('admin_screen_settings', function ($q, $http, toastr) {
        return {
            postAdminScreen: function (data) {
                var req = {
                    method: 'POST',
                    url: config.apiUrl + "/admin/screen",
                    data: data
                };
                return commonHTTPCall($http, req, toastr, true);
            },
            getAdminScreen: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/screen"
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            updateAdminScreen: function (data) {
                var req = {
                    method: 'PUT',
                    url: config.apiUrl + "/admin/screen",
                    data: data
                };
                return commonHTTPCall($http, req, toastr, true);
            }
        }
    })
    .factory('admin_site_config', function ($q, $http, toastr) {
        return {
            getAdminSiteConfig: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/siteConfig"
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            updateAdminSiteConfig: function (data) {
                var req = {
                    method: 'PUT',
                    url: config.apiUrl + "/admin/siteConfig",
                    data: data
                };
                return commonHTTPCall($http, req, toastr, false);
            }
        }
    })
    .factory('admin_upcoming_movies', function ($q, $http, toastr) {
        return {
            moveToCurrent: function (data) {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + '/admin/moveToCurrent/' + data
                };
                return commonHTTPCall($http, req, toastr, true);
            },
            getAddedMovies: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/addedUpComingMovies"
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            getQuickRecommendations: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/recommendedUpComingMovies"
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            getAdminUpcomingMovies: function (movieName) {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/searchUpComingMovies/" + movieName
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            addAdminUpcomingMovies: function (data) {
                var req = {
                    method: 'POST',
                    url: config.apiUrl + "/admin/addUpComingMovie/" + data.movieID,
                    data: data
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            removeUpComingMovies: function (data) {
                var req = {
                    method: 'DELETE',
                    url: config.apiUrl + "/admin/removeUpComingMovies/" + data
                };
                return commonHTTPCall($http, req, toastr, true);
            }
        }
    })
    .factory('admin_current_movies', function ($q, $http, toastr) {
        return {
            updateMovieInfo: function (data) {
                return $http.put(config.apiUrl + "db/admin/update-movie-info", data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            getCurrentMovies: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/currentMovies"
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            getScreenForCurrentMovies: function (data) {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/screens/" + data
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            postMovieSchedule: function (data) {
                var req = {
                    method: 'POST',
                    url: config.apiUrl + "/admin/movieSchedule",
                    data: data
                };
                return commonHTTPCall($http, req, toastr, true);
            },
            putMovieSchedule: function (data) {
                var req = {
                method: 'PUT',
                url: config.apiUrl + "/admin/movieSchedule",
                data: data
            };
                return commonHTTPCall($http, req, toastr, true);
            },
            searchMovies:  function (data) {
                var req = {
                    method: 'POST',
                    url: config.apiUrl + "/theMovieDB/movie/search",
                    data: data
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            getMovieSchedule: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/movieSchedule"
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            deleteShowtime: function (data) {
                var req = {
                    method: 'DELETE',
                    url: config.apiUrl + "/admin/movieSchedule",
                    data: data,
                    headers: {'Content-Type': 'application/json;charset=utf-8'}
                };
                return commonHTTPCall($http, req, toastr, true);
            }
        }
    })
    .factory('admin_login_register', function ($q, $http, toastr) {
        return {
            logout: function () {
                var req = {
                    method: 'GET',
                    url: config.apiUrl + "/admin/logout"
                };
                return commonHTTPCall($http, req, toastr, false);
            },

            postLogin: function (data) {
                var req = {
                    method: 'POST',
                    url: config.apiUrl + "/admin/login",
                    data: data
                };
                return commonHTTPCall($http, req, toastr, false);
            },
            postRegistration: function (data) {
                var req = {
                    method: 'POST',
                    url: config.apiUrl + "/admin/register",
                    data: data
                };
                return commonHTTPCall($http, req, toastr);
            }
        }
    });
