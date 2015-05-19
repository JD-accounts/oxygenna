'use strict';

/**
* @ngdoc directive
* @name adminPanelContent
* @restrict E
* @scope
*
* @description
*
* Handles injection of the footer into the admin panel content
*
* @usage
* ```html
* <div ui-view="content" admin-panel-content></div>
* ```
*/
angular.module('triAngular')
.directive('adminPanelContent', function($compile, $templateRequest) {
    return {
        restrict: 'A',
        link: function($scope, $element, attrs) {
            $scope.$on('$viewContentLoaded', function($event) {
                // check to see if the footer has been added
                var findFooter = $element.find('#footer');
                if(findFooter.length === 0) {
                    // we have no footer so load the template
                    $templateRequest('components/footer/footer.tmpl.html')
                    .then(function(template) {
                        // compile template with current scope and add to the content
                        var linkFn = $compile(template);
                        var content = linkFn($scope);
                        $element.append(content);
                    }, function(reason) {
                        console.error('Could not load footer tempalate');
                    });
                }
            });
        }
    };
});