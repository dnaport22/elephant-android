angular.module('DrawerLinks', [])

.controller('DrawerController', function($state, $scope, $location, $ionicLoading, $window, $ionicHistory, $timeout, $localStorage) {


  $scope.username = localStorage.getItem('user_username');
  $scope.authTitle = [];
  $scope.authStatus = null;
  $scope.links = [];
  $scope.changecolor = 'positive';
  $scope.$test = $localStorage.test;

  $scope.$storage = $localStorage.$default({
    user_login_id: 0
  })

  $scope.drawerLinks_loggedOut = [
    {title: 'Home', class: 'icon ion-home', href: '#/app/main', id: 0},
    {title: 'About us', class: 'icon ion-information-circled', href: '#/app/aboutus', id: 0}
  ];

  $scope.drawerLinks_loggedIn = [
    {title: 'Home', class: 'icon ion-home', href: '#/app/main', id: 1},
    {title: 'My items', class: 'icon ion-folder', href: '#/app/myitems', id: 1},
    {title: 'About us', class: 'icon ion-information-circled', href: '#/app/aboutus', id: 1},
    {title: 'Terms and conditions', class: 'icon ion-document-text', href: '#/app/terms', id: 1},
  ];

  $scope.logout = function() {
    $ionicLoading.show({
      content: 'Logging in',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    localStorage.setItem('user_username', '');
    localStorage.setItem('user_email', '');
    localStorage.setItem('user_activation', '');
    $localStorage.user_login_id = 0;
    $ionicLoading.hide();
  }
  $scope.loginMainuser = function() {
    $location.path("/app/login/main")
  }
});
