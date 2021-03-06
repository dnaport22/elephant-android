var elephant = angular.module('elephant',
[
  'ionic',
  'ionic.cloud',
  'ngCordova',
  'ngStorage',
  'ngCookies',
  'ionic.service.core',
  'ionic.service.analytics',
  'ionic.contrib.ui.hscrollcards',
  'firebase',
  'Login',
  'Register',
  'PasswordReset',
  'Menu',
  'HomePage',
  'Search',
  'Legal',
  'Feed',
  'PostItem',
  'MyItem'
])

.run(function($ionicPlatform, $ionicAnalytics, $localStorage, AuthenticationService, UIfactory) {
  $ionicPlatform.ready(function() {
    UIfactory.showSpinner();
    AuthenticationService.refreshConnection()
      .then(function (res) {
				AuthenticationService.login({username: 'elephant app', password: 'admin'})
					.then(function (res) {
						UIfactory.hideSpinner();
					}, function (err) {
						UIfactory.hideSpinner();
					});
			});
    //Register ionic analytics
    //$ionicAnalytics.register();
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(false);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, DrupalApiConstant, $ionicCloudProvider) {
  DrupalApiConstant.drupal_instance = "http://developv2.myelephant.xyz/";
  DrupalApiConstant.api_endpoint = "api/elev2/";
  $ionicConfigProvider.views.transition('android');
  $ionicConfigProvider.scrolling.jsScrolling(false);
  $ionicConfigProvider.spinner.icon('android');

  const TEMPLATE_DIR = 'js/Components/';

	$ionicCloudProvider.init({
		"core": {
			"app_id": "1a81529a"
		},
		"push": {
			"sender_id": "519341329763",
			"pluginConfig": {
				"android": {
					"iconColor": "white"
				}
			}
		}
	});

  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: TEMPLATE_DIR + 'Menu/src/Template/menu.html',
    controller: 'MenuController'
  })

  .state('app.userguide', {
    url: '/userguide',
    views: {
      'menuContent': {
        templateUrl: 'js/Core/UserGuide/userguide.html',
        controller: 'UserguideController'
      }
    }
  })

  .state('app.recycling-guide', {
    url: '/recyclingguide',
    views: {
      'menuContent': {
        templateUrl: "js/Core/RecyclingGuide/recyclingguide.html"
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
