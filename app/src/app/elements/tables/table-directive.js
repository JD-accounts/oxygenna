'use strict';

/**
* @ngdoc directive
* @name md-table
* @restrict E
* @scope
*
* @description
*
* Creates a material design table
*
*/
angular.module('triAngularDashboards')
.directive('mdTable', function($mdTheming) {
	return {
		restrict: 'E',
	    scope: { 
		    headers: '=', 
		    content: '=', 
		    sortable: '=', 
		    filters: '=',
		    customClass: '=customClass',
		    thumbs:'=', 
		    count: '=' 
	    },
	    controller: function($scope,$filter,$window) {
	      	var orderBy = $filter('orderBy');
	      	$scope.tablePage = 0;
	      	
	      	$scope.nbOfPages = function() {
        		return Math.ceil($scope.content.length / $scope.count);
      		};
      		
      		$scope.handleSort = function(field) {
	          	if ($scope.sortable.indexOf(field) > -1) {
	          	 	return true; 
	          	} else { 
	          		return false; 
	          	}
	      	};
		    
		    $scope.order = function(predicate, reverse) {
		        $scope.content = orderBy($scope.content, predicate, reverse);
		        $scope.predicate = predicate;
		    };
      		      		
		    $scope.getNumber = function (num) {
		      	return new Array(num);
		    };
      		
      		$scope.goToPage = function (page) {
        		$scope.tablePage = page;
      		};

      		$scope.order($scope.sortable[0],false);
    	},
    	templateUrl: 'app/elements/tables/table.tmpl.html',
	};
});