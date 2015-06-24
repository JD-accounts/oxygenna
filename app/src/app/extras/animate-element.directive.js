'use strict';

/**
* @ngdoc directive
* @name chatWidget
* @restrict E
* @scope
*
* @description
*
* Adds some chat data
*
* @usage
* ```html
* <widget chat-widget></widget>
* ```
*/
angular.module('triAngularDashboards')
.directive('animateElement', function() {
    return {        
        restrict: 'A',
        link: function($scope, $element, attrs) {                                 
            // if the first page to load is the timeline, re-trigger the check once images have loaded
            $(window).load(function() {                
                onScrollCallback();
            });
            
            // can not cache jquery selectors due to transclusion
            var onScrollCallback =  function() {     
                var $divider = $element.find('.timeline-x-axis');
                var $widget = $element.find('.timeline-widget');
                if ( $($element).offset().top <= $(window).scrollTop() + $(window).height() * 0.80 && $widget.height() > 1 ) {                                        
                    $divider.addClass('timeline-content-animated '+ attrs.direction);
                    $widget.addClass('timeline-content-animated '+ attrs.direction);
                    angular.element('md-content').unbind('scroll', onScrollCallback);
                }                
            };
            angular.element('md-content').bind('scroll', onScrollCallback).scroll();        
        }
    };
});