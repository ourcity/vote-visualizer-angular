'use strict';

/**
 * @ngdoc overview
 * @name voteVisualizerAngularApp
 * @description
 * # voteVisualizerAngularApp
 *
 * Main module of the application.
 */
angular
  .module('voteVisualizerAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
