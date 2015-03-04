angular.module('triAngular')
// register themes
.config(function ($mdThemingProvider) {
    // allow themes to change
    $mdThemingProvider.alwaysWatchTheme(true);

    $mdThemingProvider.theme('tri-default')
    .primaryPalette('green')
    .accentPalette('light-green')
    .warnPalette('deep-orange')

    $mdThemingProvider.theme('tri-purple')
    .primaryPalette('purple')
    .accentPalette('deep-purple')
    .warnPalette('amber')

})
// register test routes
.config(function ($stateProvider) {
    $stateProvider
    .state('public.skins', {
        url: '/skinstest',
        templateUrl: 'app/testing/skins.html',
        controller: 'TestingController'
    })
});