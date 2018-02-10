'use strict';

/**
 * @ngdoc service
 * @name sbAdminApp.apiKey
 * @description
 * # apiKey
 * Service in the sbAdminApp.
 */
angular.module('sbAdminApp')
    .service('apiKey', function () {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return {
            key: config.theMovieDBKey,
            movieApiUrl: config.theMovieDBURL,
            imagePath: function () {
                return config.imagePath;
            }
        };
    });
