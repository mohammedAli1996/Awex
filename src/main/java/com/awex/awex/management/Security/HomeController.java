package com.awex.awex.management.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class HomeController {
	
	@Autowired
	private UserRepository userRepository;

	
	
	@GetMapping("/login")
    public ModelAndView login() {
    	ModelAndView mav = new ModelAndView("login");
    	return mav; 
    }
    
    @GetMapping("/forbidden")
    public ModelAndView accessDenied() {
    	ModelAndView mav = new ModelAndView("forbidden");
    	return mav; 
    }  
    

    @RequestMapping(method = RequestMethod.GET , value = "/config/injectuser")
	private void injectUser() {
    	if(userRepository.findAll().size() == 0 ) {
    		Usersys user = new Usersys();
    		user.setUsername("SupportAccount");
    		user.setPassword(new BCryptPasswordEncoder().encode("Support@Admin123"));
    		user.addRole("Admin");
    		user.addPermission("owner");
    		user.setRepoId(-1);
    		this.userRepository.save(user);
    	}  
	}

    
}
