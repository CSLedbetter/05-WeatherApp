(function(){
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController)

    WeatherController.$inject = [''];

    function WeatherController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();