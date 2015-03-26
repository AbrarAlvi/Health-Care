$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'agendaDay,month,agendaWeek'
			},
			//defaultDate: '2015-02-12',
			defaultView: 'agendaDay',
			hiddenDays: [ 2, 4 ],

			selectable: true,
			selectHelper: true,
			//timezone: 'local',
			select: function(start, end) {
				$("#eventstarttime").val(start);
				$("#eventendtime").val(end);
				$('#appointmentModel').modal('show');
			
			},
			 eventClick: function(calEvent, jsEvent, view) {
				 alert('Event: ' + calEvent.title);
			},
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: {
			        url: '/rest/dashboard/appointment',
			        type: 'POST',
			       
			        error: function() {
			            alert('there was an error while fetching events!');
			        },
			        color: 'yellow',   // a non-ajax option
			        textColor: 'black' // a non-ajax option
			    }
		});
		
		
		
	});
