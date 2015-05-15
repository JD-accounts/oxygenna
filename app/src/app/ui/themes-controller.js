'use strict';

/**
 * @ngdoc function
 * @name ThemesController
 * @module triAngularUI
 * @kind function
 *
 * @description
 *
 * Handles the themes ui page
 */
angular.module('triAngularUI').
controller('ThemesController', function ($scope, $rootScope, triTheme) {
    $scope.themeableElements = [{
        title: 'Main Theme',
        elementName: 'mainTheme',
        desc: 'Theme of the main content area.'
    },{
        title: 'Sidebar Theme',
        elementName: 'sidebarTheme',
        desc: 'Theme of the left sidebar menu.'
    },{
        title: 'Toolbar Theme',
        elementName: 'toolbarTheme',
        desc: 'Theme of the top content toolbar.'
    },{
        title: 'Logo Theme',
        elementName: 'logoTheme',
        desc: 'Theme of the logo above the left sidebar.'
    }];
    $scope.themes = [];
    $scope.palettes = triTheme.palettes;

    function getElementThemes() {
        for(var element in $scope.themeableElements) {
            $scope.themeableElements[element].value = triTheme.getElementTheme($scope.themeableElements[element].elementName);
        }
    }

    function createColor(intention, color) {
        return {
            intention: intention,
            name: color.name,
            hues: color.hues
        };
    }

    // get the current set element themes and add them to the themableElements object
    getElementThemes();

    angular.forEach(triTheme.themes, function(theme) {
        // parse the themes so we get colors in nice order (primary, accent, warn, background)
        var newTheme = {
            name: theme.name,
            colors: []
        };
        newTheme.colors.push(createColor('Primary', theme.colors.primary));
        newTheme.colors.push(createColor('Accent', theme.colors.accent));
        newTheme.colors.push(createColor('Warn', theme.colors.warn));
        newTheme.colors.push(createColor('Background', theme.colors.background));
        $scope.themes.push(newTheme);
    });

    $scope.setBackgroundColor = function(color) {
        if($scope.palettes.hasOwnProperty(color.name) && $scope.palettes[color.name].hasOwnProperty(color.hues.default)) {
            var rgba = triTheme.rgba($scope.palettes[color.name][color.hues.default].value);
            return {
                'background-color': rgba
            };
        }
    };

    $scope.switchTheme = function(theme) {
        triTheme.setTheme(theme.name);
        getElementThemes();
    };

    $scope.changeTheme = function(elementName, themeName) {
        triTheme.setElementTheme(elementName, themeName);
    };
});