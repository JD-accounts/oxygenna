(function() {
    'use strict';

    angular
        .module('app.translate')
        // create a constant for languages so they can be added to both triangular & translate
        .constant('APP_LANGUAGES', [{
            name: 'Chinese',
            key: 'zh'
        },{
            name: 'English',
            key: 'en'
        },{
            name: 'French',
            key: 'fr'
        },{
            name: 'Portuguese',
            key: 'pt'
        }]);
})();
