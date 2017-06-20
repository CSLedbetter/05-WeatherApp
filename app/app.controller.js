(function () {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController)

    WeatherController.$inject = ['$http'];

    function WeatherController($http) {
        var vm = this;
        vm.show= false;
        vm.array = {}
        vm.getWeather = getWeather;

        function getWeather(cityName) {
            


            $http
                .get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=659272e716e85aa7e7c1417e9e0ac75f')
                .then(function (response) {
                    vm.show= true;
                    vm.weather = response.data;
                 
                    $("#history").append("<div>" + vm.weather.name + "</div>");
                       console.log(vm.weather)
                });

        };


    }

})();