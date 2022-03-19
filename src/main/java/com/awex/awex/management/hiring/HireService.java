package com.awex.awex.management.hiring;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.awex.awex.management.utils.ServiceException;

@Service
public class HireService {

	
	@Autowired
	private HireRepository hireRepository ; 
	
	
	public HireModel findById(int id ) {
		Optional<HireModel> optional = hireRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}else {
			throw new ServiceException("Record not found ");
		}
	}
	
	public int save(HireModel request) {
		request.setCreatedAt(new Date());
		request.setStatus("Pending");
		return hireRepository.save(request).getId();
	}
	
	public int updateHire(int id , HireModel request ) {
		HireModel db = findById(id);
		request.setId(db.getId());
		request.setCreatedAt(db.getCreatedAt());
		return hireRepository.save(request).getId();
	}
	
	public List<HireModel> getAllHires(Filter filter){
		List<HireModel> response = new ArrayList<HireModel>();
		for(HireModel model :hireRepository.findAll()) {
			
			if(checkString(filter.getStatus()) &&  !filter.getStatus().equals(model.getStatus())) {
				continue ;
			}
			if(filter.getCreatedAt()!= null &&  !filter.getCreatedAt().equals(model.getCreatedAt())) {
				continue ; 
			}
			response.add(model);
		}
		return response;
	}
		
	
	
	
	
	/*Utils*/
	
	private boolean checkString(String s ) {
		return s != null && s.length() != 0 ; 
	}
	
	
}
