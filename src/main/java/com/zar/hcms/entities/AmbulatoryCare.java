package com.zar.hcms.entities;

import java.util.Date;

public class AmbulatoryCare {

	String UID;
	Date created;
	int sessionNumber;
	String warning;
	Date nextSession;
	MedicalOfficer mo;
	float temperature;
	String evaluation;
	float diastolic;
	Patient patient;
	Date sessionStart;
	Date sessionEnd;
	int glycemia;
	int respiratory_rate;
	String session_notes;
	int bpm;
	MedicalOfficer referedBy;
	
}
