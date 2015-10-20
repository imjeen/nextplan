
var app = angular.module('homeApp',['ngMaterial']);

app.controller('homeCtrl', ['$scope', function($scope){
	$scope.title = 'it is a home page';
}])
