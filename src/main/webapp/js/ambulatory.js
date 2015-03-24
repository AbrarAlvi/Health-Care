(function(){
	var taxasilaApp = angular.module("ambulatoryModule",['ngResource']);
	taxasilaApp.controller("ambulatoryCtrl", [ '$scope','ambulatoryService', '$routeParams','$location', function($scope, instituteService, $routeParams, $location) {	
		var path =  $location.path();
		
		
		$scope.patient = {firstName:"Ruhul", lastName:"mazumder", sex:"Male", age:"32", allergy:["Milk","Nuts","Tea"]};

		$scope.updateInstitute  = function() {
			instituteService.updateInstitute($scope.institute, $scope);
		}; 	
	} ]);


	taxasilaApp.factory( 'ambulatoryService', [ '$resource', function( $resource ){
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