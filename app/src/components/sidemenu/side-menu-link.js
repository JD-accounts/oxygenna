'use strict';

/**
* @ngdoc directive
* @name sideMenuLink
* @restrict E
* @scope
*
* @description
*
* Simple menu link item
*
*/
angular.module('triAngular')
.directive('sideMenuLink', function() {
    return {
        restrict: 'E',
        require: '^sideMenu',
        scope: {
            link: '='
        },
        templateUrl: 'components/sidemenu/side-menu-link.tmpl.html',
        link: function($scope, $element, attrs, $sideMenu) {
            $scope.toggleSelected = function() {
                console.log($scope.link);
                $sideMenu.toggleSelected($scope.link);
            };

            $scope.isActive = function() {
                return $sideMenu.isActive($scope.link) ? 'active' : '';
            };
        }
    };
});