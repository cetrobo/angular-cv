'use strict';

angular.module('portfolios', [
  'ngRoute',
  'angular-scroll-animate'
])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });
