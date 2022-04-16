package com.awex.awex.management.staff;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true )
@Entity
public class Staff {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int id ;
	
	private String idd ; 
	 
	private String name ; 
	
	private String department ; 
	
	private String position ; 
	  
	private String qualifications ; 
	
	private Date joinedDate ;   
	
	private String mobile ; 
	
	private String email ; 
	
	private Date effectiveDate ;
		
	private String passportNumber ;
	
	private String passportType ; 
	
	private Date dob ;
	
	private String eid ; 
	
	private String passportIssue ;
	
	private String plcaeOfBirth ; 
	
	private String dubaiAddress ; 
	
	private Date passportValidDate ; 
	
	private String martialStatus ; 
	
	private String homeAddress ; 
	
	private String motherName ; 
	
	private String fatherName ; 
	
	private String nationality ; 
	
	private String status ; 
	
	private String passportPhoto ; 
	  
	private String passportId ; 
	
	private String degree ; 
	
}
