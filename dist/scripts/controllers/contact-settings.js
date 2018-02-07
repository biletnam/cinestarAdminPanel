"use strict";
angular.module("sbAdminApp").controller("ContactSettingsCtrl", function ($scope, apiKey, admin_contact_settings) {
    admin_contact_settings.getAdminContact().then(function (data) {
        var result = data.data;
        $scope.currentContact = {
            contactID: result.contactID,
            contactName: result.contactName,
            contactEmail: result.contactEmail,
            contactPhone: result.contactPhone
        }
    }), $scope.updateDetails = function () {
        $scope.updateData = {
            contactID: $scope.currentContact.contactID,
            contactName: $scope.adminContact.contactName,
            contactEmail: $scope.adminContact.contactEmail,
            contactPhone: $scope.adminContact.contactPhone
        }, admin_contact_settings.updateAdminContact($scope.updateData).then(function (data) {
            $scope.currentContact = $scope.updateData
        })
    }
});
