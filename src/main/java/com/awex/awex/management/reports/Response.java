package com.awex.awex.management.reports;

import java.util.List;



import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Response {

	private List<Report> list ; 
	
	private double maxPageSize ; 
	
}
