'use strict';

/**
 * @ngdoc function
 * @name AdminController
 * @module triAngular
 * @kind function
 *
 * @description
 *
 * Handles the admin view
 */
(function() {
    'use strict';

    angular
        .module('triangular.layouts')
        .controller('TriangularStateController', TriangularStateController);

    /* @ngInject */
    function TriangularStateController($scope, $rootScope, $timeout, $templateRequest, $compile, $element, $window, triLayout, triLoaderService) {
        // we need to use the scope here because otherwise the expression in md-is-locked-open doesnt work
        $scope.layout = triLayout.layout; //eslint-disable-line
        var vm = this;

        vm.activateHover = activateHover;
        vm.removeHover  = removeHover;
        vm.showLoader = triLoaderService.isActive();

        ////////////////

        function activateHover() {
            if(triLayout.layout.sideMenuSize === 'icon') {
                $element.find('.triangular-sidenav-left').addClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                }, 300);
            }
        }

        function injectFooterUpdateContent(viewName) {
            var contentView = $element.find('.triangular-content');
            if (viewName === '@triangular' && angular.isDefined(triLayout.layout.footerTemplateUrl)) {
                // add footer to the content view
                $templateRequest(triLayout.layout.footerTemplateUrl)
                .then(function(template) {
                    // compile template with current scope and add to the content
                    var linkFn = $compile(template);
                    var content = linkFn($scope);
                    $timeout(function() {
                        contentView.append(content);
                    });
                    // console.log('add footer', content);
                });
            }
        }

        function removeHover () {
            if(triLayout.layout.sideMenuSize === 'icon') {
                $element.find('.triangular-sidenav-left').removeClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                }, 300);
            }
        }

        function viewContentLoaded($event, viewName) {
            if(angular.isDefined(triLayout.layout.footer) && triLayout.layout.footer === true) {
                // inject footer into content
                injectFooterUpdateContent(viewName);
            }

            triLoaderService.setLoaderActive(false);
        }

        // watches

        // register listeners for loader
        $scope.$on('loader', function(event, isActive) {
            vm.showLoader = isActive;
        });

        $scope.$on('$stateChangeStart', function() {
            console.log('$stateChangeStart');
            triLoaderService.setLoaderActive(true);
        });

        var loadingQueue = [];
        $scope.$on('$viewContentLoading', function($event, viewName) {
            loadingQueue.push(viewName);
            console.log('loading', viewName);
            console.log('queue', loadingQueue);
            // triLoaderService.setLoaderActive(true);
        });

        $scope.$on('$viewContentLoaded', function($event, viewName) {
            var index = loadingQueue.indexOf(viewName);
            if(-1 !== index) {
                loadingQueue.splice(index, 1);
            }
            console.log('index', index);
            console.log('loaded', viewName);
            console.log('queue', loadingQueue);
            if(loadingQueue.length === 0) {
                triLoaderService.setLoaderActive(false);
            }
        });

        // $scope.$on('$viewContentLoaded', viewContentLoaded);
    }
})();
