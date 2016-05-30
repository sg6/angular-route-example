var app = angular.module('app');

app.controller('ListCtrl', function($location, $scope, $http) {
	$http.get('/data.json').then(function successCallback(res) {
		$scope.persons = res.data;
	})
})