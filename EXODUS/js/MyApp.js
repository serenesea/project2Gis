/**
 * Created by Антонина on 05.02.2017.
 */
var app = angular.module("MyApp",['ui.mask', 'ngSanitize', 'ui.select','ngRoute'])
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
           /* .when('/home', {
                templateUrl: 'home.html'
            })*/
            .when('/admin', {
                templateUrl: 'adminPanel.html'
            })
            /*.when('/about', {
                templateUrl: 'about.html'
            })
            .when('/terms', {
                templateUrl: 'terms.html'
            })
            .when('/rubricator', {
                templateUrl: 'rubricator.html'
            })
            .when('/registration', {
                templateUrl: 'registration.html'
            })
            .otherwise({
                redirectTo: '/home'
            });*/
    }]);
