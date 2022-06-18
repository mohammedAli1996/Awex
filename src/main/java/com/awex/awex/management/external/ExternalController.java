	package com.awex.awex.management.external;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.awex.awex.management.external.model.IbForm;
import com.awex.awex.management.external.model.IbKycForm;
import com.awex.awex.management.external.model.IbKycResponse;
import com.awex.awex.management.external.model.IbResponse;
import com.awex.awex.management.external.model.TouchForm;
import com.awex.awex.management.external.model.TouchRespone;
import com.awex.awex.management.utils.AjaxResponseBody;

@RestController
public class ExternalController {

	@Autowired
	private ExternalService externalService ; 
	
	
	//Tocuh Form 
	
	@PostMapping("/submitTouchForm")
	public ResponseEntity<?> submitTouchForm(@RequestBody TouchForm request) {
		 AjaxResponseBody result = new AjaxResponseBody();
		 try {
			 externalService.sendTouchForm(request);
			 result.setMsg("success");
			 return ResponseEntity.ok(result);
		 }catch(Exception ex) {
			 result.setMsg(ex.getMessage());
			 return ResponseEntity.badRequest().body(result);
		 }  
	  }
	
	  
	@GetMapping("/tocuhFormList")                    
	public ModelAndView getTouchListForm() {  
		ModelAndView mav = new ModelAndView("Touch/AllTouchForms");
		return mav ; 
	} 
	
	@GetMapping("/getAllTocuForms/{pageNumber}")                    
	public TouchRespone getAllTocuForms(@PathVariable int pageNumber) {  
		return externalService.getAllTouchForm(pageNumber);
	} 
	
	
	@GetMapping("/getTocuhForm/{id}")                    
	public TouchForm getTouchForm(@PathVariable int id ) {  
		return externalService.getTocuhForm(id);
	} 
	
	
	//Ib Form 

	
	@GetMapping("/ibFormsList")                    
	public ModelAndView getIbFormsView() {  
		ModelAndView mav = new ModelAndView("IB/AllIbForms");
		return mav ; 
	} 
	
	@PostMapping("/submitIbForm")
	public ResponseEntity<?> submitIbForm(@RequestBody IbForm request) {
		 AjaxResponseBody result = new AjaxResponseBody();
		 try {
			 externalService.sendIbForm(request);
			 result.setMsg("success");
			 return ResponseEntity.ok(result);
		 }catch(Exception ex) {
			 result.setMsg(ex.getMessage());
			 return ResponseEntity.badRequest().body(result);
		 }  
	  }
	
	@GetMapping("/getAllIbForms/{pageNumber}")                    
	public IbResponse getAllIbForms(@PathVariable int pageNumber) {  
		return externalService.getAllIbForms(pageNumber);
	} 
	
	
	@GetMapping("/getIbForm/{id}")                    
	public ModelAndView getIbForm(@PathVariable int id ) {  
		ModelAndView mav = new ModelAndView("IB/IbForm");
		mav.addObject("obj", externalService.getIbForm(id));
		return mav ; 
	} 
	
	
	//Ib Kyc Form 
	
	@GetMapping("/ibKycFormsList")                    
	public ModelAndView getIbKycView() {  
		ModelAndView mav = new ModelAndView("IbKyc/AllIbKyc");
		return mav ; 
	} 
	
	
	@PostMapping("/submitKycForm")
	public ResponseEntity<?> submitKycForm(@RequestBody IbKycForm request) {
		 AjaxResponseBody result = new AjaxResponseBody();
		 try {
			 externalService.sendIbKycForm(request);
			 result.setMsg("success");
			 return ResponseEntity.ok(result);
		 }catch(Exception ex) {
			 result.setMsg(ex.getMessage());
			 return ResponseEntity.badRequest().body(result);
		 }  
	  }
	
	
	@GetMapping("/getAllKycForms/{pageNumber}")                    
	public IbKycResponse getAllKycForms(@PathVariable int pageNumber) {  
		return externalService.getAllIbKycForms(pageNumber);
	} 
	
	
	@GetMapping("/getKycForm/{id}")                    
	public ModelAndView getKycForm(@PathVariable int id ) {  
		ModelAndView mav = new ModelAndView("IbKyc/IbKycForm");
		mav.addObject("obj", externalService.getIbJycForm(id));
		return mav ; 
	} 
	
}