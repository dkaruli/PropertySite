'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NaviCtrl
 * @description
 * # NaviCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NaviCtrl', function ($location, $timeout, $mdSidenav) {
    this.currentNavItem = function(){
      return $location.path() === '/about';
    };
    this.toggleLeft = buildToggler('left');
    this.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
  });
