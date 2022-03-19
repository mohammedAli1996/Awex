package com.awex.awex.management.hiring;

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
public class HireController {
  
	@Autowired
	private HireService hireService ;      

	@GetMapping("/addHire")
	public ModelAndView getAddHire() {
		ModelAndView mav = new ModelAndView("Interview/interviewForm");
		return mav ;   
	}
	    
	@PutMapping("/updateHire/{id}")
	public int setHireStatus(@PathVariable int id ,@RequestBody HireModel request) {
		return hireService.updateHire(id,request);
	}
	
	@PostMapping("/addHire")
	public ResponseEntity<?> addNewHire(@RequestBody HireModel request) {
		 AjaxResponseBody result = new AjaxResponseBody();
		 try {
			 int id = hireService.save(request);
			 result.setMsg("success");
			 result.setHolderID(id);
			 return ResponseEntity.ok(result);
		 }catch(Exception ex) {
			 result.setMsg(ex.getMessage());
			 return ResponseEntity.badRequest().body(result);
		 }  
	  }
	
	@GetMapping("/allHires")
	public ModelAndView getAllHiresView() {
		ModelAndView mav = new ModelAndView("hiring/orders");
		return mav ; 
	}
	
	@PostMapping("/filterHiresList")
	public List<HireModel> filterAllHiresList(@RequestBody Filter filter) {
		return hireService.getAllHires(filter);
	}
	
	@GetMapping("/getHireView/{id}")
	public ModelAndView getHireView(@PathVariable int id ) {
		ModelAndView mav = new ModelAndView("hiring/editInterviewForm");
		mav.addObject("id", id);
		return mav ;  
	}  
	 
	@GetMapping("/getHire/{id}")
	public HireModel getHireById(@PathVariable int id ) {
		return hireService.findById(id);  
	}
	
	
}
