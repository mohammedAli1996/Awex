package com.awex.awex.management.staff;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.awex.awex.management.utils.ServiceException;

@Service
public class StaffService {

	
	@Autowired
	private StaffRepository staffRepo  ;

	
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
		return staffRepo.save(request).getId();
	}
	
	
	public List<Staff> getAllStaff(){
		List<Staff> response = new ArrayList<Staff>();
		for(Staff model :staffRepo.findAll()) {
			response.add(model);
		}
		return response;
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
	
}
