package com.awex.awex.management.reports;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class ReportsController {
	
	
	@GetMapping("/myEmployees")                    
	public ModelAndView myEmployees() {  
		ModelAndView mav = new ModelAndView("reports/myEmployees");
		return mav ;   
	}
 
	
	@GetMapping("/reviewReports")                    
	public ModelAndView reviewReports() {
		ModelAndView mav = new ModelAndView("reports/reviewReports");
		return mav ;      
	} 
	    
	@GetMapping("/uploadReport")                    
	public ModelAndView uploadReport() {
		ModelAndView mav = new ModelAndView("reports/uploadReport");
		return mav ;   
	} 
	
	
	
	
}
