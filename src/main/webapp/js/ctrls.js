(function(){
	var taxasilaApp = angular.module("taxsila-ctrls",[]);
	taxasilaApp.controller("DashboardCtrl", [ '$scope', function($scope) {	
		 console.log("DashboardCtrl  reporting for duty.");	
		 $scope.healthProfessionalName = "Smita Gutgutia";
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
		 
	} ]);

	
	
})();