'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:LocationSettingsCtrl
 * @description
 * # LocationSettingsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('LocationSettingsCtrl', function ($scope, apiKey, admin_location_settings) {
        function initializeLocationDetails() {
            $scope.adminLocation = {
                locationTheatreName: null,
                locationPhysicalAddress: null,
                locationMailingAddress: null
            };
        }
        initializeLocationDetails();
        admin_location_settings.getAdminLocation().then(function (response) {
            var result = response.data.data;
            $scope.currentLocation = {
                locationID: result.locationID,
                locationTheatreName: result.locationTheatreName,
                locationPhysicalAddress: result.locationPhysicalAddress,
                locationMailingAddress: result.locationMailingAddress
            };
        });
        $scope.updateDetails = function updateDetails() {
            $scope.updateData = {
                "locationID": $scope.currentLocation.locationID,
                "locationTheatreName": $scope.adminLocation.locationTheatreName,
                "locationPhysicalAddress": $scope.adminLocation.locationPhysicalAddress,
                "locationMailingAddress": $scope.adminLocation.locationMailingAddress
            };
            admin_location_settings.updateAdminLocation($scope.updateData).then(function (data) {
                $scope.currentLocation = $scope.updateData;
                initializeLocationDetails();
            });
        }

        $scope.uploadFile = function uploadFile(files) {
            var fd = new FormData();
            console.log(files);
            //Take the first selected file
            fd.append("file", files[0]);
            $http.post("/images", fd, {
                withCredentials: true,
                headers: {'Content-Type': 'image/jpeg'},
                transformRequest: angular.identity
            }).success(function (data) {
                console.log("Success", data);
            }).error(function (data) {
                console.log("Error", data);
            });
        };
    });
