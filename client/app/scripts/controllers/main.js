'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope,$http) {

    $http({
        method : "GET",
        url : "http://localhost:3000/hello"
      }).then(function(response) {
        $scope.myWelcome = response.data[0].username;
      }, function(response) {
         $scope.myWelcome = response.statusText;
      });
  });
