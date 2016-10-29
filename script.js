var app = angular.module('personalApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'templates/home.html'
	}).when('/resume', {
		controller: 'MainCtrl',
		templateUrl: 'templates/Resume.html'
	}).when('/travel', {
		controller: 'MainCtrl',
		templateUrl: 'templates/travel.html'
	})
});

app.controller('mainCtrl', function($scope, $routeParams, $routeProvider, $location) {
	console.log("in the main controller");
});