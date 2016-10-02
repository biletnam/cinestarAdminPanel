'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug:false,
      events:true
    });
    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
					]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                }),
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                }),
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                }),
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
		resolve: {
		  loadMyFile:function($ocLazyLoad) {
			  return $ocLazyLoad.load({
				  name:'chart.js',
				  files:[
					  'bower_components/angular-chart.js/dist/angular-chart.min.js',
					  'bower_components/angular-chart.js/dist/angular-chart.css'
				  ]
			  }),$ocLazyLoad.load({
					  name:'sbAdminApp',
					  files:['scripts/controllers/main.js',
						  'scripts/directives/timeline/timeline.js',
						  'scripts/directives/notifications/notifications.js',
						  'scripts/directives/chat/chat.js',
						  'scripts/directives/dashboard/stats/stats.js']
				  })
		  }
		}
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login'
    })
	    .state('dashboard.currentMovies',{
		templateUrl:'views/pages/current-movies.html',
		url:'/current-movies',
		controller:'currentMoviesController',
		resolve: {
			loadMyFile:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:['scripts/controllers/currentMoviesController.js']
				})
			}
		}
	})
		.state('dashboard.upcomingMovies',{
			templateUrl: 'views/pages/upcoming-movies.html',
			url:'/upcoming-movies',
			controller: 'UpcomingMoviesCtrl',
			resolve:{
				loadMyFile:function ($ocLazyLoad) {
					return $ocLazyLoad.load({
						name:'sbAdminApp',
						files:['scripts/controllers/upcoming-movies.js']
					})
				}
			}
		})
        .state('dashboard.user-accounts',{
          templateUrl:'views/pages/user-accounts.html',
          url:'/user-accounts',
          controller:'UserAccountsCtrl',
          resolve:{
			  loadMyFile:function ($ocLazyLoad) {
			  return $ocLazyLoad.load({
				name:'sbAdminApp',
				files:['scripts/services/apiKey.js',
					'scripts/services/callAPIs.js',
					'scripts/controllers/user-accounts.js']
			  })
			}
          }
        })
        .state('dashboard.site-config',{
          templateUrl:'views/pages/site-config.html',
          url:'/site-config',
          controller:'SiteConfigCtrl',
          resolve:{
            loadMyFile:function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/site-config.js']
              })
            }
          }
        })
        .state('dashboard.ticket-settings',{
          templateUrl:'views/pages/ticket-settings.html',
          url:'/ticket-settings',
          controller:'TicketSettingsCtrl',
          resolve:{
            loadMyFile:function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/services/apiKey.js',
					'scripts/services/callAPIs.js',
					'scripts/controllers/ticket-settings.js']
              })
            }
          }
        })
        .state('dashboard.social-settings',{
          templateUrl:'views/pages/social-settings.html',
          url:'/social-settings',
          controller:'SocialSettingsCtrl',
          resolve:{
            loadMyFile:function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/services/apiKey.js',
					'scripts/services/callAPIs.js',
					'scripts/controllers/social-settings.js']
              })
            }
          }
        })
        .state('dashboard.location-settings',{
          templateUrl:'views/pages/location-settings.html',
          url:'/location-settings',
          controller:'LocationSettingsCtrl',
          resolve:{
            loadMyFile:function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/services/apiKey.js',
					'scripts/services/callAPIs.js',
					'scripts/controllers/location-settings.js']
              })
            }
          }
        })
        .state('dashboard.contact-settings',{
          templateUrl:'views/pages/contact-settings.html',
          url:'/contact-settings',
          controller:'ContactSettingsCtrl',
          resolve:{
            loadMyFile:function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/services/apiKey.js',
					'scripts/services/callAPIs.js',
					'scripts/controllers/contact-settings.js']
              })
            }
          }
        })
		.state('dashboard.screen-settings',{
		  templateUrl:'views/pages/screen-settings.html',
		  url:'/screen-settings',
		  controller:'ScreenSettingsCtrl',
		  resolve:{
			loadMyFile:function ($ocLazyLoad) {
			  return $ocLazyLoad.load({
				name:'sbAdminApp',
				files:['scripts/services/apiKey.js',
					'scripts/services/callAPIs.js',
					'scripts/controllers/screen-settings.js']
			  })
			}
		  }
		})
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'views/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'views/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'views/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'views/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'views/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'views/ui-elements/grid.html',
       url:'/grid'
   })
  }]);

    
