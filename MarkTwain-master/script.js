var app = angular.module('twainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainCtrl',
		templateUrl: 'templates/About.html'
	}).when('/tom', {
		controller: 'MainCtrl',
		templateUrl: 'templates/Tom.html'
	}).when('/huck', {
		controller: 'MainCtrl',
		templateUrl: 'templates/Huck.html'
	}).when('/references', {
		controller: 'MainCtrl',
		templateUrl: 'templates/References.html'
	})
});

app.controller('MainCtrl', function($scope, $location) {
	console.log("in the main controller");
});