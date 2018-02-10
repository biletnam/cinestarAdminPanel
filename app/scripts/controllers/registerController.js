/**
 * Created by !!.Swapnil..Aryan.!! on 23-Oct-16.
 */
'use strict';
angular.module('sbAdminApp')
    .controller('registerController', function ($scope, apiKey, admin_login_register, $state, toastr) {
        $scope.openSignIn = function () {
            $state.go("login");
        };
        $scope.register = {
            "firstName": "",
            "lastName": "",
            "emailId": "",
            "password": "",
            "confirm_password": ""
        };
        $scope.registerUser = function registerUser() {
            $scope.data = {
                "adminUserName": $scope.register.firstName + " " + $scope.register.lastName,
                "adminUserEmail": $scope.register.emailId,
                "adminPassword": $scope.register.password,
                "adminConfirmPassword": $scope.register.confirm_password
            };
            admin_login_register.postRegistration($scope.data)
                .success(function (response) {
                    toastr.success(response.message);
                    $state.go("login");
                    // if (resolve.data.Status != "Fail") {
                    //     // $rootScope.$broadcast('signinWithSignUp', $scope.data);
                    //     // $rootScope.signinWithSignUp = $scope.data;
                    // }
                })
                .error(function (response) {
                    toastr.error(response.error.message, "ERROR");
                });
        };
    });
