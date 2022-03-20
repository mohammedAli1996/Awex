package com.awex.awex.management.hiring;

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
public class HireModel {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int id ;
	
	private String positionfb ;
	
	private Date createdAt ; 
	/*Personal Details*/
	private String name ;
	private String address1;
	private String address2;
	private String clientId;
	private String age;
	private String mobile;
	private String whatApp ;
	private String martial;
	private String na ;
	private String email ;
	private String healthStatus;
	private String nationality;

	
	/*Work experience*/
	private String workEx1Name;
	private String workEx1Department;
	private String workEx1Position;
	private String workEx1WorkingPeriod;
	private String workEx1ReasonLeave;
	private String workEx2Name;
	private String workEx2Department;
	private String workEx2Position;
	private String workEx2WorkingPeriod;
	private String workEx2ReasonLeave;
	private String workEx3Name;
	private String workEx3Department;
	private String workEx3Position;
	private String workEx3WorkingPeriod;
	private String workEx3ReasonLeave;
	
	
	/*Education*/
	private String schoolOfGraduation; 
	private String major; 
	private String yearOfGrad; 
	private String heighGrad; 
	
	
	/*Family Member*/
	private String member1Name; 
	private String member1RelationShip;
	private String member1Na;
	private String member1Mobile;
	private String member1Company;
	
	private String member2Name; 
	private String member2RelationShip;
	private String member2Na;
	private String member2Mobile;
	private String member2Company;
	
	
	
	/*Emergency contact*/
	private String emergContact1Name; 
	private String emergContact1RelationShip;
	private String emergContact1Mobile;
	
	private String emergContact2Name;  
	private String emergContact2RelationShip;
	private String emergContact2Mobile;
	
	 
	/*Attachments*/
	private String photoLink ;   
	private String resumeLink ;
	 
	private String status ; 
	
	
}
