var app = angular.module('personalApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'mainCtrl',
		templateUrl: 'templates/home.html'
	}).when('/resume', {
		controller: 'mainCtrl',
		templateUrl: 'templates/Resume.html'
	}).when('/travel', {
		controller: 'mainCtrl',
		templateUrl: 'templates/travel.html'
	})
});

app.controller('mainCtrl', function($scope, $routeParams, $routeProvider, $location) {
});