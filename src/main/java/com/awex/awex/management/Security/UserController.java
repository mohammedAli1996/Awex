package com.awex.awex.management.Security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.awex.awex.management.utils.AjaxResponseBody;

@RestController
@RequestMapping
public class UserController {

	@Autowired 
	private UserService userService ; 
	  
	
	@GetMapping("/userLang/{lang}")
	public ModelAndView setUserLang(@PathVariable String lang) {  
		userService.setUserLang(lang);
		ModelAndView mav = new ModelAndView("reports/myReports");
		return mav ; 
	}
	
	
	
	@GetMapping("/userLang") 
	public UserLanguage getUserLang() {  
		UserLanguage response = new UserLanguage() ; 
		response.setLanguage(userService.getUserLanguage());
		return response;
	}
	
	@GetMapping("/addUser")
	public ModelAndView getAddUser() {
		ModelAndView mav = new ModelAndView("Users/addUser");
		mav.addObject("user", new Usersys());  
		return mav ; 
	}
	  
	@GetMapping("/editUesr/{id}")  
	public ModelAndView getEditUser(@PathVariable int id ) {
		ModelAndView mav = new ModelAndView("Users/editUser");
		mav.addObject("id", id);  
		return mav ; 
	}
	
	@GetMapping("/getUser/{id}")  
	public Usersys getUserById(@PathVariable int id ) {
		return userService.getUser(id) ; 
	}
	
	
	@PutMapping("/addUser/{id}")
	public ResponseEntity<?> updateUser(@PathVariable int id ,@RequestBody Usersys request ) {
		 AjaxResponseBody result = new AjaxResponseBody();
		 try { 
				userService.updateUser(request,id);
			 return ResponseEntity.ok(result);
		 }catch(Exception ex) {
			result.setMsg(ex.getMessage());
			return ResponseEntity.badRequest().body(result);
		 }  
	}
	
	  
	@PostMapping("/addUser")
	public ResponseEntity<?> addUser(@RequestBody Usersys request ) {
		 AjaxResponseBody result = new AjaxResponseBody();
		 try { 
			 	System.out.println(request.getUsername());
				System.out.println(request.getPassword());
				userService.addUser(request);
			 return ResponseEntity.ok(result);
		 }catch(Exception ex) {
			result.setMsg(ex.getMessage());
			return ResponseEntity.badRequest().body(result);
		 }  
	}
	
	@GetMapping("/active/{id}")  
	public ResponseEntity<?> activateUser(@PathVariable int id ) {
		AjaxResponseBody result = new AjaxResponseBody();
		 try { 
			 userService.activateUser(id); 
			 return ResponseEntity.ok(result);
		 }catch(Exception ex) {  
			result.setMsg(ex.getMessage());
			return ResponseEntity.badRequest().body(result);
		 }  
	}  
	
	@GetMapping("/deactive/{id}")  
	public ResponseEntity<?> deActivateUser(@PathVariable int id ) {
		AjaxResponseBody result = new AjaxResponseBody();
		 try { 
			 userService.deActivateUser(id); 
			 return ResponseEntity.ok(result);
		 }catch(Exception ex) {
			result.setMsg(ex.getMessage());
			return ResponseEntity.badRequest().body(result);
		 }  
	} 
	   
	
	@GetMapping("/allUsers")
	public ModelAndView getAllActiveUsers(){
		ModelAndView mav = new ModelAndView("Users/usersList");
		mav.addObject("users", userService.getAllUsers(true));
		return mav;    
	}   
	
	@GetMapping("/allActive")
	public List<UserResponse> getActiveUSesList(){
		return userService.getAllUsers(true) ;
	}  
	
	@GetMapping("/allUsersNN")
	public List<UserResponse> getAll(){
		return userService.getAllUsers() ;
	}  
	  
	@GetMapping("/allNonActive")
	public List<UserResponse> getNonActiveUsersList(){
		return userService.getAllUsers(false) ;
	}      
	  
	@GetMapping("/NA/all")
	public ModelAndView getAllNonActiveUsers(){
		ModelAndView mav = new ModelAndView("allNonActiveUsers");
		mav.addObject("users", userService.getAllUsers(false));
		return mav;
	}
	
	
	
	@GetMapping("/allReportTo")
	public List<UserResponse> getAllUsersReportTo(){
		return userService.getAllUsersReportTo() ;
	}  
	
	
}
