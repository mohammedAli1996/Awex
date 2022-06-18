package com.awex.awex.management.external.model;

import java.util.List;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class IbResponse {
	
	private List<IbForm> list ; 
	
	private double maxPageSize ; 

}
