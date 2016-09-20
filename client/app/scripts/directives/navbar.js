'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('clientApp')
  .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/nav-view.html',
      controller: 'NaviCtrl',
      controllerAs: 'navi'
    };
  });
