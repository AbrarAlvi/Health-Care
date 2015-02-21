(function(){
	var taxasilaApp = angular.module("taxasila-settings",['ngResource']);
	taxasilaApp.controller("SettingsCtrl", [ '$scope','instituteService', '$routeParams','$location', function($scope, instituteService, $routeParams, $location) {	
		var path =  $location.path();
		switch (path)
		{
		  case '/settings/general':instituteService.getInstitute($scope);
		  break;
		  case '/settings/courses':  console.log("not yet implemented");
		  break;
		  case '/settings/batch':  console.log("not yet implemented");
		  break;
		  case '/settings/subjects':  console.log("not yet implemented");
		  break;
		  case '/settings/std_catagory':  console.log("not yet implemented");
		  break;
		  case '/settings/eventmanagement':  console.log("not yet implemented");		 
			
		}
		

		$scope.updateInstitute  = function() {
			instituteService.updateInstitute($scope.institute, $scope);
		}; 	
	} ]);


	taxasilaApp.factory( 'instituteService', [ '$resource', function( $resource ){
		return new Institute( $resource );
	}]);
	

	function Institute( resource ) {	
		this.resource = resource; 

		this.updateInstitute = function ( institute, scope ) {
			var Institute = resource('rest/settings/updateInstitute');		
			Institute.save(institute, function(response){
				scope.message = response.message;
			});		
		}

		this.getInstitute = function( scope ) {
			var Institute = resource('rest/settings/listInstitute');
			Institute.get(function(institute){
				scope.institute = institute;
			});
		}
		
		this.updateCourse = function ( course, scope ) {
			var Course = resource('/settings/updateCourse');		
			Course.save(course, function(response){
				scope.message = response.message;
			});		
		}

		this.listCourse = function( scope ) {
			var Course = resource('/settings/listCourse');
			Course.query(function(courses){
				scope.courses = courses;
			});
		}
	}

})();