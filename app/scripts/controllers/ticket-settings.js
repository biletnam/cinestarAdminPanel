'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:TicketSettingsCtrl
 * @description
 * # TicketSettingsCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
    .controller('TicketSettingsCtrl', function ($scope, apiKey, admin_ticket_settings) {
        $scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        function initializeTicketDetails() {
            $scope.adminTicket = {
                ticketGroup: null,
                ticketName: null,
                ticketPrice: null,
                ticketType: null,
                ticketDay: null
            };
        }
        initializeTicketDetails();
        admin_ticket_settings.getAdminTicket().then(function (response) {
            $scope.ticketConfig = response.data.data;
        });
        $scope.updateDetails = function updateDetails() {
            $scope.updateData = {
                "ticketGroup": $scope.adminTicket.ticketGroup,
                "ticketName": $scope.adminTicket.ticketName,
                "ticketPrice": $scope.adminTicket.ticketPrice + "$",
                "ticketType": $scope.adminTicket.ticketType,
                "ticketDay": $scope.adminTicket.ticketDay
            };
            admin_ticket_settings.updateAdminTicket($scope.updateData).then(function (response) {
                $scope.ticketConfig = response.data.data;
                initializeTicketDetails();
            });
        };
    });
