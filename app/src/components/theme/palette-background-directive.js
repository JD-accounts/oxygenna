'use strict';

/**
* @ngdoc directive
* @name paletteBackground
* @restrict A
* @scope
*
* @description
*
* Adds a palette colour and contrast CSS to an element
*
* @usage
* ```html
* <div palette-background="green:500">Coloured content</div>
* ```
*/
angular.module('triAngular')
.directive('paletteBackground', function (triTheme) {
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {
            var splitColor = attrs.paletteBackground.split(':');
            var color = triTheme.getPaletteColor(splitColor[0], splitColor[1]);

            if(color !== undefined) {
                $element.css({
                    'background-color': triTheme.rgba(color.value),
                    'border-color': triTheme.rgba(color.value),
                    'color': triTheme.rgba(color.contrast)
                });
            }

        }
    };
});
