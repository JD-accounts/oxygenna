'use strict';

/**
 * @ngdoc provider
 * @name triThemingProvider
 * @module triAngular
 * @kind provider
 *
 * @description
 *
 * Wrapper for material themes
 */
angular.module('triAngular')
.provider('triTheming', ThemingProvider);

function ThemingProvider() {
    var themes = {};

    return {
        theme: function(name) {
            if(themes[name] !== undefined ) {
                return themes[name];
            }

            var theme = new Theme(name);

            themes[name] = theme;

            return themes[name];

        },
        $get: function() {
            return {
                getThemes: function() {
                    return themes;
                }
            };
        }
    };
}

function Theme(name) {
    var THEME_COLOR_TYPES = ['primary', 'accent', 'warn', 'background'];
    var self = this;
    self.name = name;
    self.colors = {};
    self.isDark = false;

    THEME_COLOR_TYPES.forEach(function(colorType) {
        self[colorType + 'Palette'] = function setPaletteType(paletteName, hues) {
            self.colors[colorType] = {
                name: paletteName,
                hues: {}
            };
            if(undefined !== hues) {
                self.colors[colorType].hues = hues;
            }
            return self;
        };
    });

    self.dark = function(isDark) {
        // default setting when dark() is called is true
        self.isDark = isDark === undefined ? true : isDark;
    };
}
