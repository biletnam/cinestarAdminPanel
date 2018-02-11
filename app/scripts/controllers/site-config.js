'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:SiteConfigCtrl
 * @description
 * # SiteConfigCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('SiteConfigCtrl', function ($scope, apiKey, $parse, admin_site_config) {
        $scope.getData = function getData() {
            $scope.openCloseTime = [];
            $scope.Monday = {openTime: "", closeTime: ""};
            $scope.Tuesday = {openTime: "", closeTime: ""};
            $scope.Wednesday = {openTime: "", closeTime: ""};
            $scope.Thursday = {openTime: "", closeTime: ""};
            $scope.Friday = {openTime: "", closeTime: ""};
            $scope.Saturday = {openTime: "", closeTime: ""};
            $scope.Sunday = {openTime: "", closeTime: ""};
            admin_site_config.getAdminSiteConfig().then(function (response) {
                $scope.openCloseTime = [];
                $scope.daysInWeek = [];
                var data = response.data;
                for (var i = 0; i < data.data.length; i++) {
                    var temp = {};
                    $scope.daysInWeek.push(data.data[i].day);
                    temp[data.data[i].day] = [data.data[i].openTime, data.data[i].closeTime];
                    $scope.openCloseTime.push(temp);
                    temp = {};
                }
                $scope.siteConfig = {
                    theatreName: data.data[0].theatreName,
                    websiteUrl: data.data[0].theatreURL,
                    timeZone: data.data[0].siteTimeZone
                };
                $scope.timeZone = ["a", "b", "c"];
                $scope.updateSiteConfig = {
                    theatreName: "",
                    websiteUrl: "",
                    timeZone: ""
                };
            });
        };
        $scope.getData();

        $scope.updateDetails = function updateDetails() {
            var openTime = "";
            var closeTime = "";
            for (var i = 0; i < $scope.daysInWeek.length; i++) {
                if (i === 0) {
                    openTime = $scope.Monday.openTime;
                    closeTime = $scope.Monday.closeTime;
                }
                else if (i === 1) {
                    openTime = $scope.Tuesday.openTime;
                    closeTime = $scope.Tuesday.closeTime;
                }
                else if (i === 2) {
                    openTime = $scope.Wednesday.openTime;
                    closeTime = $scope.Wednesday.closeTime;
                }
                else if (i === 3) {
                    openTime = $scope.Thursday.openTime;
                    closeTime = $scope.Thursday.closeTime;
                }
                else if (i === 4) {
                    openTime = $scope.Friday.openTime;
                    closeTime = $scope.Friday.closeTime;
                }
                else if (i === 5) {
                    openTime = $scope.Saturday.openTime;
                    closeTime = $scope.Saturday.closeTime;
                }
                else if (i === 6) {
                    openTime = $scope.Sunday.openTime;
                    closeTime = $scope.Sunday.closeTime;
                }
                $scope.updateData = {
                    "siteConfigID": i + 1,
                    "siteAdminID": "userID_1",
                    "theatreName": $scope.updateSiteConfig.theatreName,
                    "theatreURL": $scope.updateSiteConfig.websiteUrl,
                    "siteTimeZone": $scope.updateSiteConfig.timeZone,
                    "day": $scope.daysInWeek[i],
                    "openTime": openTime,
                    "closeTime": closeTime
                };
                admin_site_config.updateAdminSiteConfig($scope.updateData).then(function (data) {
                    $scope.updateData = {
                        "siteAdminID": "userID_1",
                        "theatreName": "",
                        "theatreURL": "",
                        "siteTimeZone": "",
                        "day": "",
                        "openTime": "",
                        "closeTime": ""
                    };
                    $scope.getData();
                });
            }

        };
    });
