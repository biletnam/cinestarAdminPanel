"use strict";angular.module("sbAdminApp").service("apiKey",function($location,$http,$q){var apiUrl="",image="";return{key:"2c9306d42037dfb0de0fc3f153819054",movieApiUrl:"http://api.themoviedb.org/3/",apiUrlFn:function(){return apiUrl="localhost"==$location.host()?"http://localhost:8000/api/":"http://www.cinex.press:8080/api/"},imagePath:function(){return image="localhost"==$location.host()?"http://127.0.0.5/":"http://cinex.press:8002/images/"}}});