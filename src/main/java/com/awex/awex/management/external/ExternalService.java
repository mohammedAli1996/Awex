package com.awex.awex.management.external;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.awex.awex.management.Utils;
import com.awex.awex.management.external.model.IbForm;
import com.awex.awex.management.external.model.IbKycForm;
import com.awex.awex.management.external.model.IbKycResponse;
import com.awex.awex.management.external.model.IbResponse;
import com.awex.awex.management.external.model.TouchForm;
import com.awex.awex.management.external.model.TouchRespone;
import com.awex.awex.management.external.repository.IbFormRepository;
import com.awex.awex.management.external.repository.IbKycFormRepository;
import com.awex.awex.management.external.repository.TouchFormRepository;

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
		SimpleDateFormat DateFor = new SimpleDateFormat("dd/MM/yyyy");
		form.setCreatedAt(DateFor.format(new Date()));
		return ibFormRepository.save(form);
	}
	
	
	public IbResponse getAllIbForms(int pageNumber){
		List<IbForm> list =  ibFormRepository.findAll() ; 
		int pageSize = Utils.getPageSize() ; 
		List<IbForm> paged = new ArrayList<IbForm>();
		int currentIndex = pageNumber * pageSize; 
		double maxPageSize = Math.ceil(list.size()/Utils.getPageSize()) ; 
		for(int i = currentIndex ; i < currentIndex + pageSize ; i ++ ) {
			if(i >= list.size()) {
				break ; 
			}else {
				paged.add(list.get(i));
			}
		}
		IbResponse res = new IbResponse();
		res.setList(paged);
		res.setMaxPageSize(maxPageSize);
		return res; 
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
		SimpleDateFormat DateFor = new SimpleDateFormat("dd/MM/yyyy");
		form.setCreatedAt(DateFor.format(new Date()));
		return touchFormRepository.save(form);
	}
	
	
	public TouchRespone getAllTouchForm(int pageNumber){
		List<TouchForm> list =  touchFormRepository.findAll() ; 
		int pageSize = Utils.getPageSize() ; 
		List<TouchForm> paged = new ArrayList<TouchForm>();
		int currentIndex = pageNumber * pageSize; 
		double maxPageSize = Math.ceil(list.size()/Utils.getPageSize()) ; 
		for(int i = currentIndex ; i < currentIndex + pageSize ; i ++ ) {
			if(i >= list.size()) {
				break ; 
			}else {
				paged.add(list.get(i));
			}
		}
		TouchRespone res = new TouchRespone();
		res.setList(paged);
		res.setMaxPageSize(maxPageSize);
		return res; 
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
		SimpleDateFormat DateFor = new SimpleDateFormat("dd/MM/yyyy");
		form.setCreatedAt(DateFor.format(new Date()));
		return ibKycFormRepository.save(form);
	}
	
	
	public IbKycResponse getAllIbKycForms(int pageNumber){
		List<IbKycForm> list =  ibKycFormRepository.findAll() ; 
		int pageSize = Utils.getPageSize() ; 
		List<IbKycForm> paged = new ArrayList<IbKycForm>();
		int currentIndex = pageNumber * pageSize; 
		double maxPageSize = Math.ceil(list.size()/Utils.getPageSize()) ; 
		for(int i = currentIndex ; i < currentIndex + pageSize ; i ++ ) {
			if(i >= list.size()) {
				break ; 
			}else {
				paged.add(list.get(i));
			}
		}
		IbKycResponse res = new IbKycResponse();
		res.setList(paged);
		res.setMaxPageSize(maxPageSize);
		return res; 
	}

	
	
	
	
	
	


}
