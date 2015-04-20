'use strict';

/**
* @ngdoc directive
* @name widget
* @restrict E
* @scope
*
* @description
*
* Creates a dashboard weather widget
*
* @usage
* ```html
* <widget-weather location="'New York'"></widget-weather>
* ```
*/
angular.module('triAngularDashboards')
.directive('widgetWeather', function($http, $compile, $templateCache) {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            title: '=',
            subtitle: '=',
            menu: '=',
            location: '='
        },
        replace: true,
        link: function($scope, $element, attrs) {
            var query = 'select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + $scope.location + '")';
            var url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

            $http.get(url).
            success(function(data, status, headers, config) {
                if(data.query.count > 0) {
                    $scope.weather = {
                        date: new Date(data.query.created),
                        temp: data.query.results.channel.item.condition.temp,
                        text: data.query.results.channel.item.condition.text
                    };
                }
            }).
            error(function(data, status, headers, config) {
                console.error('Could not get location weather', data);
            });

            var weatherTemplateHTML = $templateCache.get('app/dashboards/widgets/widget.tmpl.html');
            $http.get('app/dashboards/widgets/widget-weather.tmpl.html', { cache: $templateCache }).success(function(html) {
                var weatherTemplate = $compile(html)($scope);
                $element.replaceWith(weatherTemplate);
            });
        }
    };
});