package com.awex.awex.management.staff;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.awex.awex.management.Utils;
import com.awex.awex.management.Security.UserRepository;
import com.awex.awex.management.Security.Usersys;
import com.awex.awex.management.utils.ServiceException;

@Service
public class StaffService {

	
	@Autowired
	private StaffRepository staffRepo  ;

	@Autowired
	private UserRepository userRepository ; 
	
	public Staff findById(int id ) {
		Optional<Staff> optional = staffRepo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}else {
			throw new ServiceException("Staff not found ");
		}  
	}
	  
	
	public int save(Staff request) {
		request.setStatus("Active");
		return staffRepo.save(request).getId();
	}
	
	public int updateStaff(int id , Staff request ) {
		Staff db = findById(id);
		request.setId(db.getId());
		request.setStatus(db.getStatus());  
		try {
			Usersys user =  userRepository.findByRepoId(id);
			user.setDepartment(request.getDepartment());
			userRepository.save(user);
		}catch(Exception ex) {
			
		}
		return staffRepo.save(request).getId();
	}
	
	
	public Response getAllStaff(int pageNumber){
		List<Staff> response = new ArrayList<Staff>();
		for(Staff model :staffRepo.findAll()) {
			response.add(model);  
		}
		int pageSize = Utils.getPageSize() ; 
		List<Staff> paged = new ArrayList<Staff>();
		int currentIndex = pageNumber * pageSize; 
		double maxPageSize = Math.ceil(response.size()/Utils.getPageSize()) ; 
		for(int i = currentIndex ; i < currentIndex + pageSize ; i ++ ) {
			if(i >= response.size()) {
				break ; 
			}else {
				paged.add(response.get(i));
			}
		}
		Response res = new Response();
		res.setList(paged);
		res.setMaxPageSize(maxPageSize);
		return res; 
	}
	
	



	public Staff terminateStaff(int id) {
		Staff db = findById(id);
		if(db.getStatus().equals("Active")) {
			db.setStatus("Terminated");
		}else {
			db.setStatus("Active");
		}
		return staffRepo.save(db);
	}


	public List<Staff> getAllStaffNoPage() {
		return staffRepo.findAll();
	}
	
}
