'use strict';

angular.module('open-market', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', { url: '/', templateUrl: '/views/general/home.html' })

      .state('register', { url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl' })
      .state('login', { url: '/login', templateUrl: 'views/users/users.html', controller: 'UsersCtrl' })

      .state('items', { url: '/items', templateUrl: 'views/items/items.html', abstract: true })
      .state('items.new', { url: '/new', templateUrl: 'views/items/items-new.html', controller: 'ItemsNewCtrl'});
  }])
  .run(['$rootScope', 'User', function($rootScope, User) {
    User.status().then(function(response) {
      console.log(response.data.name);
      $rootScope.name = response.data.name;
    });
  }]);