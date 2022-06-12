package com.awex.awex.management.external;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExternalService {

	
	@Autowired
	private IbFormRepository ibFormRepository; 
	
	@Autowired
	private TouchFormRepository touchFormRepository ; 
	
	@Autowired
	private IbKycFormRepository ibKycFormRepository ; 

	
	
	//Ib Form 
	
	public IbForm getIbForm(int id ) {
		Optional<IbForm> optional = ibFormRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get() ; 
		}else {
			return null ; 
		}
 	}
	
	public IbForm sendIbForm(IbForm form ) {
		return ibFormRepository.save(form);
	}
	
	
	public List<IbForm> getAllIbForms(){
		return ibFormRepository.findAll() ; 
	}
	
	
	

	
	//Touch Form 
	
	public TouchForm getTocuhForm(int id ) {
		Optional<TouchForm> optional = touchFormRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get() ; 
		}else {
			return null ; 
		}
 	}
	
	public TouchForm sendTouchForm(TouchForm form) {
		return touchFormRepository.save(form);
	}
	
	
	public List<TouchForm> getAllTouchForm(){
		return touchFormRepository.findAll() ; 
	}
	
	
	
	
	//IbKyc Form 
	
	
	public IbKycForm getIbJycForm(int id ) {
		Optional<IbKycForm> optional = ibKycFormRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get() ; 
		}else {
			return null ; 
		}
 	}
	
	public IbKycForm sendIbKycForm(IbKycForm form ) {
		return ibKycFormRepository.save(form);
	}
	
	
	public List<IbKycForm> getAllIbKycForms(){
		return ibKycFormRepository.findAll() ; 
	}

	
	
	
	
	
	


}
