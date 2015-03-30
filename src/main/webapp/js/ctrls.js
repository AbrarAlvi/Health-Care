(function(){
	var taxasilaApp = angular.module("taxsila-ctrls",['ui.bootstrap']);
	taxasilaApp.controller("DashboardCtrl", [ '$scope','$http', function($scope, $http) {	
		 console.log("DashboardCtrl  reporting for duty.");	
		 $scope.appointmentServedCount = 3;
		 $scope.totalAppointmentCount  = 10;
		 $scope.grandTotalAppointmentsCount =1023;
		 $scope.totalPatientCount=300;
		 $scope.averageAppointmentTime = 30;
		 
		 $scope.newEvent;
		 $scope.appointmentServed = [{name:'ruhul',age:32, sex:"Male", problem:"Regular checkup", status:"done"},
		                             {name:'shakira',age:32, sex:"Female", problem:"Regular checkup", status:"ongoing"},
		                             {name:'Munna',age:32, sex:"Male", problem:"Regular checkup", status:"inqueu"}];
		 
		 $scope.addNewEvent =  function(){
			eventData = {
				title: $scope.newEvent.patientName,
				start: $("#eventstarttime").val(),
				end:  $("#eventendtime").val()
			};
			
			$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true		
			$('#calendar').fullCalendar('unselect');
			$('#appointmentModel').modal('hide');
			
			$scope.newEvent = {};
			 
			
		 }
		 
		  $scope.onDoctorSelect = function ($item, $model, $label) {
			  $http.post('rest/dashboard/getdoctor', {hpname:$item}).
			  success(function(data, status, headers, config) {
			    // this callback will be called asynchronously
			    // when the response is available
			  }).
			  error(function(data, status, headers, config) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
				   /* $scope.$item = $item;
				    $scope.$model = $model;
				    $scope.$label = $label;*/
		  };
		  $scope.currentDoctor = 'Dr. Smita Gutgutia';
		  $scope.doctors = ['Dr Ganguli Pathak', 'Dr Smita Agarwal', ' Dr. Smita Gutgutia ', 'Dr Ramesh Yadav'];
		  $selectedPatient = undefined;
		  $scope.patients = ['Ruhul Amin' , 'Avrar Alvi' , 'Jabeed Ali', 'Pankaj Pathak', 'Prasant Yadav', 'Rituporna Ray', 'Smatha Sethi'];
		 
	} ]);
	
	

	
	
})();