elephant.controller('DrawerController', function($state, $scope, $location, $localStorage, UIfactory) {

  $scope.username = $localStorage.user_username;
  $scope.$storage = $localStorage.$default({
    user_login_id: 0,
    user_username: null,
    user_activation: null,
    user_email: null
  });

  $scope.drawerLinks_loggedOut = [
    {title: 'Home', class: 'icon ion-home', href: '#/app/main', id: 0},
    {title: 'About us', class: 'icon ion-information-circled', href: '#/app/aboutus', id: 0}
  ];

  $scope.drawerLinks_loggedIn = [
    {title: 'Home', class: 'icon ion-home', href: '#/app/main', id: 1},
    {title: 'Post items', class: 'icon ion-upload', href: '#/app/postitem', id: 1},
    {title: 'My items', class: 'icon ion-folder', href: '#/app/myitems', id: 1},
    {title: 'About us', class: 'icon ion-information-circled', href: '#/app/aboutus', id: 1},
    {title: 'Terms and conditions', class: 'icon ion-document-text', href: '#/app/terms', id: 1},
  ];

  $scope.logout = function() {
    UIfactory.showSpinner();
    $localStorage.user_username = null;
    $localStorage.user_email = null;
    $localStorage.user_activation = null;
    $localStorage.user_login_id = 0;
    $localStorage.expiry = 0;
    UIfactory.hideSpinner();
  }
  $scope.loginMainuser = function() {
    $location.path("/app/login/main")
  }
});
