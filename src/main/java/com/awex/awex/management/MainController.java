package com.awex.awex.management;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class MainController {

	@GetMapping("/getNav")
	public ModelAndView getAllHiresView() {
		ModelAndView mav = new ModelAndView("Nav");
		return mav ; 
	}
	  
}
 