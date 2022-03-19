package com.awex.awex.management.Attachmenets;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;


@Setter
@Getter
@Accessors(chain = true) 
@Entity
public class Attachment {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int id ; 
		
	private String path ; 

	private String type ; 
	
	private int parentId ; 
	
}
