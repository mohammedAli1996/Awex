package com.awex.awex.management.external.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class IbForm {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int id ; 
	
	private String rt ; 
	private String name ; 
	private String gender ;
	private String emailAddress ;
	private String nationality ;
	private String rn  ;
	private String ex  ;
	private String oa  ;
	private String mta ;
	private String ct  ;
	private String cn  ;
	private String mn ;
	private String sc ;
	
	private String createdAt ; 
	


}
