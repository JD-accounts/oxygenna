(function() {
    'use strict';

    angular
        .module('triangular.components')
        .service('triBreadcrumbs', BreadcrumbsService);

    /* @ngInject */
    function BreadcrumbsService() {
        this.breadcrumbs = {
            crumbs: []
        };
        this.addCrumb = addCrumb;
        this.reset = reset;

        ////////////////

        function addCrumb(item) {
            this.breadcrumbs.crumbs.unshift(item);
        }

        function reset() {
            this.breadcrumbs.crumbs = [];
        }
    }
})();