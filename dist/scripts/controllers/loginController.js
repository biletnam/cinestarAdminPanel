"use strict";
angular.module("sbAdminApp").controller("loginController", function ($scope, apiKey, $stateParams, admin_login_register, $state, $cookieStore, $rootScope) {
    $scope.openSignUp = function () {
        $state.go("register")
    }, $scope.register = {emailId: "", password: ""}, $scope.$on("signinWithSignUp", function (event, data) {
        console.log("---------------------", data), $scope.register.emailId = data.adminUserEmail, $scope.register.password = data.password, $scope.signinUser()
    }), $scope.signinUser = function () {
        $scope.data = {
            adminUserEmail: $scope.register.emailId,
            password: $scope.register.password
        };
        localStorage.setItem("user_session", JSON.stringify($scope.data));
        admin_login_register.postLogin($scope.data).then(function (resolve, reject) {
            console.log(resolve), console.log(reject), "Fail" != resolve.data.Status ? ($state.go("dashboard.home"), $scope.userLoggedIn = !0, $cookieStore.put("userLogin", $scope.register.emailId)) : $scope.userLoggedIn = !1
        })
    }
});
