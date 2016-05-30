var app = angular.module('app');

app.controller('ListItemCtrl', function($location, $scope, $http, $routeParams) {
	$http.get('/data.json').then(function successCallback(res) {
		for(var i = 0; i < res.data.length; i++) {
			if(res.data[i].id == $routeParams.id) {
				$scope.person = res.data[i];
			}
		}
	});

	$scope.person = {};


})