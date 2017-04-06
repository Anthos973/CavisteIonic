angular.module('starter')
.controller('UserController', function ($scope, $http) {
	$http({

		url:'/api/user/register',
		method:"GET"

	}).then(function success (response) {
		$scope.users=response.data;

		
	},function fail (response) {

	})
	
})