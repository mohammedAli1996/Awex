package com.awex.awex.management.hiring;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.awex.awex.management.Utils;
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
	
	public Response getAllHires(Filter filter, int pageNumber){
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
		int pageSize = Utils.getPageSize() ; 
		List<HireModel> paged = new ArrayList<HireModel>();
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
		
	
	
	
	
	/*Utils*/
	
	private boolean checkString(String s ) {
		return s != null && s.length() != 0 ; 
	}
	
	
}
