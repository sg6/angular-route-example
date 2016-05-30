var app = angular.module('app');

app.controller('HomeCtrl', function($location, $scope) {
	var list = [5,4,3,2,1];

	$scope.list = list;

	$scope.location = $location.path();
})