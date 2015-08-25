
(function() {
    'use strict';

    angular
        .module('app')
        .value('googleChartApiConfig', value);

    var value = {
        version: '1.1',
        optionalSettings: {
            packages: ['line', 'bar', 'geochart', 'scatter'],
            language: 'en'
        }
    };
})();