'use strict';

/**
 * @ngdoc provider
 * @name triSkinsProvider
 * @module triAngular
 * @kind provider
 *
 * @description
 *
 * Wrapper for material themes
 */
angular.module('triAngular')
.provider('triSkins', function($mdThemingProvider, triThemingProvider) {
    var skins = {};
    var currentSkin = null;
    var useSkinCookie = false;

    function Skin(id, name, $mdThemingProvider, triThemingProvider) {
        var THEMABLE_ELEMENTS = ['sidebar'];
        var self = this;
        self.id = id;
        self.name = name;
        self.elements = {};

        THEMABLE_ELEMENTS.forEach(function(element) {
            self[element + 'Theme'] = function setElementTheme(themeName) {
                self.elements[element] = themeName;
                return self
            };
        });

        self.loadThemes = function() {
            for (var element in self.elements) {
                var theme = triThemingProvider.theme(self.elements[element]);

                $mdThemingProvider.theme(theme.name)
                .primaryPalette(theme.colors.primary.name)
                .accentPalette(theme.colors.accent.name)
                .warnPalette(theme.colors.warn.name);
            }
        }
    }

    return {
        skin: function(id, name) {
            if(skins[id] !== undefined ) {
                return skins[id];
            }

            var skin = new Skin(id, name, $mdThemingProvider, triThemingProvider);

            skins[id] = skin;

            return skins[id];
        },
        setSkin: function(id) {
            if(skins[id] === undefined) {
                console.error('No such skin as ' + id);
                return;
            }

            // set skin to selected skin
            currentSkin = skins[id];

            // override the skin if cookie is enabled and has been set
            if(useSkinCookie) {
                var $cookies;
                angular.injector(['ngCookies']).invoke(function(_$cookies_) {
                    $cookies = _$cookies_;
                });
                if($cookies['triangular-skin'] !== undefined) {
                    var cookieTheme = angular.fromJson($cookies['triangular-skin']);

                    currentSkin = skins[cookieTheme.skin];
                }
            }
            console.log(currentSkin);
            currentSkin.loadThemes();

            return currentSkin;
        },
        useSkinCookie: function(skinCookie) {
            useSkinCookie = skinCookie;
        },
        $get: function() {
            return {
                getCurrent: function() {
                    return currentSkin;
                },
                getSkins: function() {
                    return skins;
                }
            };
        }
    };
})
.run(function($rootScope, triSkins) {
    $rootScope.triSkin = triSkins.getCurrent();
});

