angular.module('myApp', ['ui.router',  'myApp.UserController'])
.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
        })
    .state('aboutus', {
        url: '/aboutus',
        templateUrl: 'templates/aboutus.html'
    })
    .state('contactus', {
        url: '/contactus',
        templateUrl: 'templates/contactus.html'
    })   
    .state('user', {
        url: '/user/User',        
        templateUrl: 'templates/User.html',
        controller: 'userController'
    })
}])