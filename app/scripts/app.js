
var app = angular.module('app',['ngMaterial']);

/* material theme*/
// app.config(function($mdThemingProvider) {
//   $mdThemingProvider.theme('default')
//     .primaryPalette('pink')
//     .accentPalette('orange');
// });

app.controller('AppCtrl', ['$scope', function($scope){
	$scope.title = 'it is a home page';
}]);


