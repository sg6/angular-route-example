var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $compileProvider, $httpProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/templates/home.html'
    })
    .when('/list', {
      controller: 'ListCtrl',
      templateUrl: '/templates/list.html'
    })
    .when('/list/:id', {
      controller: 'ListItemCtrl',
      templateUrl: '/templates/list-item.html'
    })
    .otherwise({
      controller: 'HomeCtrl',
      templateUrl: '/templates/404.html'
    });
})