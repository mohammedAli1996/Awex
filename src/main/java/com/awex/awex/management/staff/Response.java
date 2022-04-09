package com.awex.awex.management.staff;

import java.util.List;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class Response {

	private List<Staff> list ; 
	
	private double maxPageSize ; 
	
}
