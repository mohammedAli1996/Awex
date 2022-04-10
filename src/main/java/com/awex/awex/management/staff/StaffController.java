package com.awex.awex.management.staff;

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

import com.awex.awex.management.hiring.IBK;
import com.awex.awex.management.utils.AjaxResponseBody;

@RestController
public class StaffController {

	@Autowired
	private StaffService staffService ; 
	
	
	@GetMapping("/addStaff")
    public ModelAndView newStaff() {
    	ModelAndView mav = new ModelAndView("staff/addStaff");
    	return mav; 
    }
	
	
	@PutMapping("/updateStaff/{id}")
	public int setHireStatus(@PathVariable int id ,@RequestBody Staff request) {
		return staffService.updateStaff(id,request);
	}
	
	@PostMapping("/addStaff")
	public ResponseEntity<?> addStaff(@RequestBody Staff request) {
		 AjaxResponseBody result = new AjaxResponseBody();
		 try {
			 int id = staffService.save(request);
			 result.setMsg("success");
			 result.setHolderID(id);
			 return ResponseEntity.ok(result);
		 }catch(Exception ex) {
			 result.setMsg(ex.getMessage());
			 return ResponseEntity.badRequest().body(result);
		 }  
	  }    
	
	
	@PostMapping("/testststs")
	public IBK test(@RequestBody IBK tt ) {
		return tt ; 
	}
	  
	@GetMapping("/staffList")
    public ModelAndView staffList() {
    	ModelAndView mav = new ModelAndView("staff/staffList");
    	return mav; 
    }  
	
	@GetMapping("/allStaff/{pageNumber}")
    public Response allStaff(@PathVariable int pageNumber) {
    	return staffService.getAllStaff(pageNumber);
    }  
	
	
	@GetMapping("/allStaff")
    public List<Staff> allStaffNoPage() {
    	return staffService.getAllStaffNoPage();
    }
	
	
	
	  
	@GetMapping("/edtStaff/{id}")
	public ModelAndView getStaffView(@PathVariable int id ) {
		ModelAndView mav = new ModelAndView("staff/edtStaff");
		mav.addObject("id", id);
		return mav ;  
	}    
	
	 
	@GetMapping("/getStaff/{id}")
	public Staff getStaffById(@PathVariable int id ) {
		return staffService.findById(id);  
	}  
	  
	@GetMapping("/terminateStaff/{id}")
	public Staff terminateStaff(@PathVariable int id ) {
		return staffService.terminateStaff(id);  
	}
	
	
}  
