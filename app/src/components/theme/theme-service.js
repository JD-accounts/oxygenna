'use strict';

angular.module('triAngular')
.provider('triTheme', function($mdThemingProvider) {
    var themeableElements = {};
    var useCookie = false;
    return {
        setThemeableElements: function(elements) {
            themeableElements = elements;
        },
        useThemeCookie: function(useThemeCookie) {
            useCookie = useThemeCookie;
        },
        $get: function($cookies) {
            if(useCookie && undefined !== $cookies['tri-themes']) {
                themeableElements = angular.fromJson($cookies['tri-themes']);
            }

            var service = {
                getElementTheme: function(elementName) {
                    // always return default theme if no theme is set for this element
                    return undefined === themeableElements[elementName] ? 'default' : themeableElements[elementName];
                },
                setElementTheme: function(elementName, themeName) {
                    themeableElements[elementName] = themeName;
                    if(useCookie) {
                        $cookies['tri-themes'] = angular.toJson(themeableElements);
                    }
                },
                setTheme: function(themeName) {
                    // set all elements to the same theme
                    for(var elementName in themeableElements) {
                        service.setElementTheme(elementName, themeName);
                    }
                },
                rgba: function(rgbArray, opacity) {
                    return $mdThemingProvider._rgba(rgbArray, opacity);
                },
                themes: function() {
                    return $mdThemingProvider._THEMES;
                },
                palettes: function() {
                    return $mdThemingProvider._PALETTES;
                },
                getThemeColor: function(themeName, intentName) {
                    if(undefined !== $mdThemingProvider._THEMES[themeName] && undefined !== $mdThemingProvider._THEMES[themeName].colors[intentName]) {
                        var color = $mdThemingProvider._THEMES[themeName].colors[intentName];
                        if(undefined !== $mdThemingProvider._PALETTES[color.name] && undefined !== $mdThemingProvider._PALETTES[color.name][color.hues.default]) {
                            return $mdThemingProvider._PALETTES[color.name][color.hues.default];
                        }
                    }
                }
            };

            return service;
        }
    };
});