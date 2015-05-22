'use strict';

/**
* @ngdoc directive
* @name md-colresize
* @restrict E
* @scope
*
* @description
*
* Allows an md-table to have resizable columns
*
*/
angular.module('triAngularDashboards')
.directive('mdColresize', function ($timeout) {
  	return {
    	restrict: 'A',
    	link: function (scope, element, attrs) {
      		scope.$evalAsync(function () {
        		$timeout(function(){ 
        			$(element).colResizable({
          				liveDrag: true,
          				fixed: true          
        			});
        		},100);
      		});
    	}
  	}
});