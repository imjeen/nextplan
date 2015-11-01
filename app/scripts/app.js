
var app = angular.module('app',['ngMaterial','ngMdIcons']);

/* material theme*/
app.config(function ($mdThemingProvider) {
     
    $mdThemingProvider.theme('purple')
        .primaryPalette('deep-purple', {
            'default': '500',
            
        });
 
    $mdThemingProvider.setDefaultTheme('purple');
      
});   

app.controller('AppCtrl', ['$scope', function($scope){
	$scope.title = 'it is a home page';
}]);
