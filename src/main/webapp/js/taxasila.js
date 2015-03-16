(function (){
	var taxasilaApp = angular.module("taxasilaApp", [ 'ui.bootstrap','ngRoute', 'taxsila-ctrls','taxasila-settings', 'ngResource' ,'countrySelect']);
	taxasilaApp.config(function($routeProvider) {
		$routeProvider.when('/', {
			controller : 'DashboardCtrl',
			templateUrl : 'partials/dashboard.html'
		}).when('/settings/general', {
			controller : 'SettingsCtrl',
			templateUrl : 'partials/general.html'	
		}).when('/settings/courses', {
			controller : 'SettingsCtrl',
			templateUrl : 'partials/courses.html'	
		}).when('/createprescription', {
			controller : 'SettingsCtrl',
			templateUrl : 'partials/createPrescription.html'	
			
		}).when('/settings/std_catagory', {
			controller : 'SettingsCtrl',
			templateUrl : 'partials/std_catagory.html'	
		}).when('/settings/eventmanagement', {
			controller : 'SettingsCtrl',
			templateUrl : 'partials/eventmanagement.html'					
		});
	});
	
	taxasilaApp.controller('DatepickerDemoCtrl', function ($scope) {
		  $scope.today = function() {
			    $scope.dt = new Date();
			  };
			  $scope.today();

			  $scope.clear = function () {
			    $scope.dt = null;
			  };

			  $scope.open = function($event) {
			    $event.preventDefault();
			    $event.stopPropagation();

			    $scope.opened = true;
			  };

			  $scope.dateOptions = {
			    formatYear: 'yy',
			    startingDay: 1
			  };

			 // $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
			  $scope.format = 'dd/MM/yyyy';
			});
})();




