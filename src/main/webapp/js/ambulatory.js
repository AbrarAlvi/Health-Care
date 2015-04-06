(function(){
	var taxasilaApp = angular.module("ambulatoryModule",['ngResource','ui.bootstrap']);
	taxasilaApp.controller("ambulatoryCtrl", [ '$scope','ambulatoryService', '$routeParams','$location', function($scope, instituteService, $routeParams, $location) {	
		 console.log("ambulatoryCtrl  reporting for duty.");	
		var path =  $location.path();		
		$scope.patient = {firstName:"Ruhul", lastName:"Mazumder", sex:"Male", age:"32", allergy:["Milk","Nuts","Tea"]};
		var path =  $location.path();
		
		
		
		$scope.prescription =[];
		$scope.selectmedication = {};

		
		$scope.addDrug  = function() {
			
			
			//instituteService.updateInstitute($scope.institute, $scope);
			$scope.prescription.push($scope.selectmedication);
			$scope.selectmedication = {};
		}; 	
		
		$scope.updateInstitute  = function() {
			instituteService.updateInstitute($scope.institute, $scope);
		}; 	
		
		  $selectedPatient = undefined;
		  $scope.patients = ['Ruhul Amin' , 'Avrar Alvi' , 'Jabeed Ali', 'Pankaj Pathak', 'Prasant Yadav', 'Rituporna Ray', 'Smatha Sethi'];
		  $scope.onPatientSelect = function ($item, $model, $label) {
			 
			    $scope.$item = $item;
			    $scope.$model = $model;
			    $scope.$label = $label;
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
