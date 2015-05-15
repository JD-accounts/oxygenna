'use strict';

angular.module('triAngular')
.provider('triTheme', function($mdThemingProvider) {
    console.log($mdThemingProvider);
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
                getMdClasses: function($element) {
                    return $.grep($element[0].className.split(' '), function(v, i){
                       return v.indexOf('md-') === 0;
                    });
                },
                filterIntentClass: function(mdClasses) {
                    var intentClass = '';
                    var intentClasses = ['md-primary', 'md-accent', 'md-warn'];
                    for (var i = 0; i < intentClasses.length; i++) {
                        if(mdClasses.indexOf(intentClasses[i]) === 0) {
                            intentClass = intentClasses[i].replace('md-', '');
                            break;
                        }
                    };
                    return intentClass;
                },
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
                rgba: $mdThemingProvider._rgba,
                themes: $mdThemingProvider._THEMES,
                palettes: $mdThemingProvider._PALETTES,
                parseRules: $mdThemingProvider._parseRules,
                getPalette: function(name) {
                    return $mdThemingProvider._PALETTES[name];
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