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
public class TouchForm {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int id ; 
	private String email  ; 
	private String fullName ; 
	private String type ; 
	private String phone ; 
	private String topic ; 
	private String createdAt ; 
}
