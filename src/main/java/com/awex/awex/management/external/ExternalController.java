package com.awex.awex.management.external;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
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
	
	
	@GetMapping("/getAllTocuForms")                    
	public List<TouchForm> getAllTocuForms() {  
		return externalService.getAllTouchForm();
	} 
	
	
	@GetMapping("/getTocuhForm/{id}")                    
	public TouchForm getTouchForm(@PathVariable int id ) {  
		return externalService.getTocuhForm(id);
	} 
	
	
	//Ib Form 
	
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
	
	@GetMapping("/getAllIbForms")                    
	public List<IbForm> getAllIbForms() {  
		return externalService.getAllIbForms();
	} 
	
	
	@GetMapping("/getIbForm/{id}")                    
	public IbForm getIbForm(@PathVariable int id ) {  
		return externalService.getIbForm(id);
	} 
	
	
	//Ib Kyc Form 
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
	
	
	@GetMapping("/getAllKycForms")                    
	public List<IbKycForm> getAllKycForms() {  
		return externalService.getAllIbKycForms();
	} 
	
	
	@GetMapping("/getKycForm/{id}")                    
	public IbKycForm getKycForm(@PathVariable int id ) {  
		return externalService.getIbJycForm(id);
	} 
	
}