package com.awex.awex.management.reports;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.awex.awex.management.utils.AjaxResponseBody;

@RestController
public class ReportsController {
	
	
	@Autowired
	private ReportsService reportsService ;
	
	
	@GetMapping("/uploadReport")                    
	public ModelAndView uploadReport() {
		ModelAndView mav = new ModelAndView("reports/uploadReport");
		return mav ;   
	} 
	
	@PostMapping("/uploadReport")
	public ResponseEntity<?> uploadreport(@RequestBody Report request) {
		 AjaxResponseBody result = new AjaxResponseBody();
		 try {
			 reportsService.addReport(request);
			 result.setMsg("success");
			 return ResponseEntity.ok(result);
		 }catch(Exception ex) {
			 result.setMsg(ex.getMessage());
			 return ResponseEntity.badRequest().body(result);
		 }  
	  }
	
	    
	
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
	
	
	
	@PostMapping("/filterAllReports")
	public List<Report> filterReports(@RequestBody Filter filter) {
		return reportsService.filterReports(filter, false);
	}
	    
	@PostMapping("/filterMyReports")
	public List<Report> filterMyReports(@RequestBody Filter filter) {
		return reportsService.filterReports(filter, true);
	}
	    
	
	@GetMapping("/myReports")                    
	public ModelAndView getMyReports() {  
		ModelAndView mav = new ModelAndView("reports/myReports");
		return mav ;    
	}
	
	@PostMapping("/myReports")
	public List<Report> getMyReports(@RequestBody Filter filter) {
		return reportsService.getMyReports(filter);
	}
	
	@GetMapping("/getReport/{reportId}")                    
	public ModelAndView getReport(@PathVariable int reportId) {  
		ModelAndView mav = new ModelAndView("reports/updateReports");
		mav.addObject("reportId", reportId);
		return mav ;    
	}
	  
	@GetMapping("/getReportById/{reportId}")                    
	public Report getReportById(@PathVariable int reportId) {  
		return reportsService.getReportById(reportId);
	}
	
	
	@PutMapping("/updateReport/{reportId}")
	public ResponseEntity<?> updateReport(@RequestBody Report request , @PathVariable int reportId) {
		 AjaxResponseBody result = new AjaxResponseBody();
		 try {
			 reportsService.updateReport(request,reportId);
			 result.setMsg("success");
			 return ResponseEntity.ok(result);
		 }catch(Exception ex) {
			 result.setMsg(ex.getMessage());
			 return ResponseEntity.badRequest().body(result);
		 }  
	  }
	
	
}
