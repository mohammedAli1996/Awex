package com.awex.awex.management.reports;

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
public class Report {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int id ;
	
	
	private String clientName ; 
	
	private String country ; 
	
	private String city ; 
	
	private String email ; 
	
	private String telephone ; 
	
	private String whatsApp ; 
	
	private String position ; 
	
	private String experience ; 
	
	private String tradingProduct ; 
	  
	private String mtfId ;  
	
	private String crmId ; 
	    
	private String depositeAmount ;   
	
	private String moreDetails ; 
	
	private String filePath ;   
	
	
	//Required From BE 
	private int empId ; 
	        
	private String empName ;         
	 
	private String department ;     
	  
	private Date date ;     
	    
    
	private String type  ; // base on department   
	    
	
}  
