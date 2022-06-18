package com.awex.awex.management.external.model;

import java.util.List;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class IbKycResponse {

	
	private List<IbKycForm> list ; 
	
	private double maxPageSize ; 
	
	
}
