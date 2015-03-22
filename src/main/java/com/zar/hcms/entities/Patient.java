package com.zar.hcms.entities;

import java.util.Date;

public class Patient {
	String UID;
	String firstName;
	String lastName;
	Date dob;
	String bloodGroup;
	MedicalOfficer primaryMO;
	String generalInfo;
	String allergy;
	Address address;
	String[] phone;
	String sex;
	Treatment[] pastTreatment;

}
