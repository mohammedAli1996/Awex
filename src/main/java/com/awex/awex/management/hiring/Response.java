package com.awex.awex.management.hiring;

import java.util.List;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class Response {

	private List<HireModel> list ; 
	
	private double maxPageSize ; 
	
}
