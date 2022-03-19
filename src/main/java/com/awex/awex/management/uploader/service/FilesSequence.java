package com.awex.awex.management.uploader.service;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class FilesSequence {

	@Id
	private int id ; 
	
	private int seq ; 
}
