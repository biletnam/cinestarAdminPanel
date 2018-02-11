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
    .factory('admin_contact_settings', function ($q, $http, apiKey) {
        return {
            getAdminContact: function () {
                return $http.get(config.apiUrl + "db/admin/setting/contact-setting").success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            updateAdminContact: function (data) {
                return $http.put(config.apiUrl + "db/admin/setting/contact-setting", data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            }
        }

    })
    .factory('admin_location_settings', function ($q, $http, apiKey) {
        return {
            getAdminLocation: function () {
                return $http.get(config.apiUrl + "db/admin/setting/location-setting").success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            updateAdminLocation: function (data) {
                return $http.put(config.apiUrl + "db/admin/setting/location-setting", data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            }
        }
    })
    .factory('admin_social_settings', function ($q, $http, apiKey) {
        return {
            getAdminSocial: function () {
                return $http.get(config.apiUrl + "db/admin/setting/social-setting").success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            updateAdminSocial: function (data) {
                return $http.put(config.apiUrl + "db/admin/setting/social-setting", data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            }
        }
    })
    .factory('admin_ticket_settings', function ($q, $http, apiKey) {
        return {
            getAdminTicket: function () {
                return $http.get(config.apiUrl + "db/admin/setting/ticket-setting").success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            updateAdminTicket: function (data) {
                return $http.put(config.apiUrl + "db/admin/setting/ticket-setting", data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            }
        }
    })
    .factory('admin_screen_settings', function ($q, $http, apiKey) {
        return {
            postAdminScreen: function (data) {
                return $http.post(config.apiUrl + "db/admin/setting/screen-setting", data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            getAdminScreen: function () {
                return $http.get(config.apiUrl + "db/admin/setting/screen-setting").success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            updateAdminScreen: function (data) {
                return $http.put(config.apiUrl + "db/admin/setting/screen-setting", data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
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
    .factory('admin_upcoming_movies', function ($q, $http, apiKey) {
        return {
            getAddedMovies: function () {
                return $http.get(config.apiUrl + "db/admin/added-upcoming-movies").success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            getQuickRecommendations: function () {
                return $http.get(config.apiUrl + "db/admin/recommended-upcoming-movies").success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            getAdminUpcomingMovies: function (movieName) {
                return $http.get(config.apiUrl + "db/admin/search-upcoming-movies/" + movieName).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            updateAdminUpcomingMovies: function (data) {
                return $http.put(config.apiUrl + "db/admin/add-upcoming-movies/" + data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            }
        }
    })
    .factory('admin_current_movies', function ($q, $http, apiKey) {
        return {
            updateMovieInfo: function (data) {
                return $http.put(config.apiUrl + "db/admin/update-movie-info", data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            getCurrentMovies: function () {
                return $http.get(config.apiUrl + "db/admin/get-current-movies").success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            getScreenForCurrentMovies: function (data) {
                return $http.get(config.apiUrl + "db/admin/get-screen-for-current-movies/" + data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            postMovieSchedule: function (data) {
                return $http.post(config.apiUrl + "db/admin/post-movie-schedule", data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            putMovieSchedule: function (data) {
                return $http.post(config.apiUrl + "db/admin/post-movie-schedule", data).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            getMovieSchedule: function () {
                return $http.get(config.apiUrl + "db/admin/get-movie-schedule").success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
            },
            deleteShowtime: function (data) {
                console.log(data);
                return $http(
                    {
                        method: 'DELETE',
                        url: config.apiUrl + "db/admin/delete-movie-schedule",
                        data: data,
                        headers: {'Content-Type': 'application/json;charset=utf-8'}
                    }).success(function (data) {
                    return data;
                }).error(function (data) {
                    return data;
                });
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
                return commonHTTPCall($http, req, toastr);
            },

            postLogin: function (data) {
                var req = {
                    method: 'POST',
                    url: config.apiUrl + "/admin/login",
                    data: data
                };
                return commonHTTPCall($http, req, toastr);
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
