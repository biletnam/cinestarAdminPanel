/**
 * Created by !!.Swapnil..Aryan.!! on 27-Sep-16.
 */
'use strict';
angular.module('sbAdminApp')
	.factory('admin_user', function ($q, $http, apiKey) {
		return{
			getAdminUser: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/get-admin-user").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			updateAdminUser: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/update-admin-user", data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}

	});