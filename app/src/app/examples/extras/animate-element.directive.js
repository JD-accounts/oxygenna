(function() {
    'use strict';

    angular
        .module('app.examples.extras')
        .directive('animateElements', animateElements);

    /* @ngInject */
    function animateElements($interval) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element) {
            var $widgets  = [];
            var $dividers = [];

            // using interval checking since window load event does not work on some machines
            var widgetsLoaded = $interval(function() {
                $widgets = $element.find('.timeline-widget');
                if($widgets.length > 0 && $widgets[0].clientHeight > 1) {
                    $dividers = $element.find('.timeline-x-axis');
                    onScrollCallback();
                    $interval.cancel(widgetsLoaded);
                }
            }, 100);

            // TODO rewrite this
            /*eslint-disable */
            var onScrollCallback =  function() {
                for(var i = 0; i < $widgets.length; i++) {
                    if($($widgets[i]).offset().top <= $(window).scrollTop() + $(window).height() * 0.80 && $($widgets[i]).height() > 1) {
                        var dir = ( i % 2 === 0 ) ? 'left':'right';
                        $($dividers[i]).addClass('timeline-content-animated '+ dir);
                        $($widgets[i]).addClass('timeline-content-animated '+ dir);
                    }
                }
            };
            /*eslint-enable */

            angular.element('md-content').bind('scroll', onScrollCallback).scroll();
        }
    }
})();
