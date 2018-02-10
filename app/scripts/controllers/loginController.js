/**
 * Created by !!.Swapnil..Aryan.!! on 23-Oct-16.
 */
(function () {
    'use strict';
    angular.module('sbAdminApp')
        .controller('loginController', function ($scope, apiKey, $stateParams, admin_login_register, $state, $cookieStore) {
            $scope.openSignUp = function () {
                $state.go("register");
            };
            $scope.register = {"emailId": "", "password": ""};
            // $scope.$on("signinWithSignUp", function (event, data) {
            //     console.log("---------------------", data);
            //     $scope.register.emailId = data.adminUserEmail;
            //     $scope.register.password = data.password;
            //     $scope.signinUser();
            // });
            $scope.signinUser = function () {
                $scope.data = {
                    adminUserEmail: $scope.register.emailId,
                    adminUserPassword: $scope.register.password
                };
                admin_login_register.postLogin($scope.data).then(function (response) {
                    localStorage.setItem("user_session", JSON.stringify($scope.data));
                    $cookieStore.put("userSID", response.data.data);
                    $state.go("dashboard.home");
                })
            }
        });
})();
