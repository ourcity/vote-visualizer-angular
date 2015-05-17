'use strict';

/**
 * @ngdoc function
 * @name voteVisualizerAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the voteVisualizerAngularApp
 */
angular.module('voteVisualizerAngularApp')
  .controller('LinksCtrl', function ($scope, $http) {
    $http.get('data/councilmembers.json').success(function(data) {
      $scope.councilMembers = data;
    });
  });