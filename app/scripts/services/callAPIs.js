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

	})
	.factory('admin_contact_settings', function ($q, $http, apiKey) {
		return{
			getAdminContact: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/setting/contact-setting").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			updateAdminContact: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/setting/contact-setting", data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}

	})
	.factory('admin_location_settings', function ($q, $http, apiKey) {
		return{
			getAdminLocation: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/setting/location-setting").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			updateAdminLocation: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/setting/location-setting", data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}
	})
	.factory('admin_social_settings', function ($q, $http, apiKey) {
		return{
			getAdminSocial: function(){
				return $http.get("" + apiKey.apiUrlFn() + "db/admin/setting/social-setting").
				success(function (data) {
					return data;
				}).error(function(data){
					return data;
				});
			},
			updateAdminSocial: function (data) {
				return $http.put(""+apiKey.apiUrlFn()+"db/admin/setting/social-setting", data).
				success(function(data){
					return data;
				}).error(function(data){
					return data;
				});
			}
		}
	});