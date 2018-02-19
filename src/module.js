var myApp = angular.module('myApp', ['ngRoute'])

            //ng-route config
            .config(function ($routeProvider, $locationProvider){
            $routeProvider
                .when('/home', {
                templateUrl: 'src/view/default.html',
                })
                .when('/contact-info/:contact_index', {
                templateUrl: 'src/view/contact_info.html',
                controller: 'contactInfoCtrl'
                })
                .when('/add', {
                templateUrl: 'src/view/contact_form.html',
                controller: 'addContactCtrl'
                })
                .when('/edit/:contact_index', {
                templateUrl: 'src/view/contact_form.html',
                controller: 'editContactCtrl'
                })
                .otherwise({redirectTo: '/home'});
            })