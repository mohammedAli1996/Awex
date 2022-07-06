package com.awex.awex.management.Security;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.awex.awex.management.staff.StaffService;
import com.awex.awex.management.utils.ServiceException;



@Service
public class UserService {

	@Autowired
	private UserRepository userRepository ; 
	
	@Autowired
	private MasterService masterService ;
	 
	
	private List<String> currSystemRoles = new ArrayList<String>();
	
	@PostConstruct
	private void initRolesList() {
		currSystemRoles.add("manager");
		currSystemRoles.add("sales");
		
	}
	
	
	public void setUserLang(String lang) {
		Usersys current = masterService.get_current_User(); 
		current.setLanguage(lang);
		userRepository.save(current);
	}
	 
	 
	public String getUserLanguage() {
		Usersys current = masterService.get_current_User(); 
		if(current == null ) {
			return "En";
		}
		return current.getLanguage() ;
	}
	 
	/*Getters*/
	
	@Autowired
	private StaffService staffService ;
	
	public Usersys addUser(Usersys request ) {
		if(userRepository.countByUsername(request.getUsername()) > 0 ) {
			throw new ServiceException("Email already linked to a user");
		}
		if(userRepository.countByrepoId(request.getRepoId()) > 0 ) {
			throw new ServiceException("Employee already has a user ");
		}
		request.setEmployeeName(staffService.findById(request.getRepoId()).getName());
		request.setDepartment(staffService.findById(request.getRepoId()).getDepartment());
		if(!request.getUserRoles().equalsIgnoreCase("Employee")) {
			request.setReportTo(-1);
		}
		request.setPassword(new BCryptPasswordEncoder().encode(request.getPassword()));
		request.addPermission("user");  
		return userRepository.save(request);  
	}        
	
	
	public Usersys updateUser(Usersys request , int userId  ) {
		Usersys db = getUser(userId);
		db.setId(userId);
		if(!db.getUsername().equals(request.getUsername())) {
			if(userRepository.countByUsername(request.getUsername()) > 0 ) {
				throw new ServiceException("Email already linked to a user");    
			}   
		}
		db.setUsername(request.getUsername());
		db.setEmployeeName(staffService.findById(request.getRepoId()).getName());
		db.setDepartment(staffService.findById(request.getRepoId()).getDepartment());
		if(!request.getUserRoles().equalsIgnoreCase("Employee")) { 
			db.setReportTo(-1);  
		}else { 
			db.setReportTo(request.getReportTo());  
		}    
		db.setUserRoles(request.getUserRoles());
		if(request.getPassword() != null && !StringUtils.isEmpty(request.getPassword())) {
			db.setPassword(new BCryptPasswordEncoder().encode(request.getPassword()));
		}
		return userRepository.save(db);  
	}  
	
	
	
	public List<UserResponse> getAllUsers(boolean active){
		List<UserResponse> users = new ArrayList<UserResponse>();  
		for(Usersys user : userRepository.findAll()) {
			if(user.isActive() != active) {
				continue ;
			}
			if(user.getUsername().equals("SupportAccount")) {
				continue ; 
			}
			UserResponse response = new UserResponse();
			response.setEmployeeName(user.getEmployeeName());
			response.setId(user.getId());
			response.setUserName(user.getUsername());
			response.setRole(user.getUserRoles());
			users.add(response);
		}
		return users ; 
	}
	

	
	public List<UserResponse> getAllUsers(){
		List<UserResponse> users = new ArrayList<UserResponse>();   
		for(Usersys user : userRepository.findAll()) {
			if(user.getUsername().equals("SupportAccount")) {
				continue ; 
			}
			UserResponse response = new UserResponse();
			response.setActive(user.isActive());
			try {
				if(user.getRepoId() != -1 ) {
					response.setEmployeeName(staffService.findById(user.getRepoId()).getName());
				}
			}catch(Exception ex ) {
				response.setEmployeeName(user.getEmployeeName());
			}
			response.setId(user.getId());
			response.setUserName(user.getUsername());
			response.setDepartment(user.getDepartment());
			response.setRole(user.getUserRoles());
			users.add(response);
		}
		return users ; 
	}
	
	public Usersys getUser(int id ) {
		Optional<Usersys> optional = this.userRepository.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		}
		throw new ServiceException("User Not found");
	}

	
	
	/*Active state control*/
	
	public void activateUser(int userId ) {
		 Usersys user = getUser(userId);
		 user.setActive(true);
		 this.userRepository.save(user);
	}
	
	public void deActivateUser(int userId ) {
		 Usersys user = getUser(userId);
		 user.setActive(false);
		 this.userRepository.save(user);
	}
	
	
	public void deleteUsersWithRepoId(int repoId) {
		for(Usersys user : userRepository.findAll()) {
			if(user.getRepoId() == repoId ) {
				user.setActive(false);
				userRepository.save(user);
			}
		}
	}
	
	
	/*Sys roles*/
	
	public List<String> getCurrSystemRoles() {
		return currSystemRoles;
	}

	public void setCurrSystemRoles(List<String> currSystemRoles) {
		this.currSystemRoles = currSystemRoles;
	}
	
	/*Dash service*/
	
	public int getUsersCount(int repoId) {
		if(masterService.get_current_User().getUserRoles().equalsIgnoreCase("owner")
				|| masterService.get_current_User().getUserRoles().equalsIgnoreCase("admin")
				) {
			if(repoId == -1 ) {
				return (int)this.userRepository.count();
			}else {
				return this.userRepository.countByrepoId(masterService.get_current_User().getRepoId());
			}
		}
		return this.userRepository.countByrepoId(masterService.get_current_User().getRepoId());
	}


	public List<UserResponse> getAllUsersReportTo() {
		List<UserResponse> users = new ArrayList<UserResponse>();   
		for(Usersys user : userRepository.findAll()) {
			if(user.getUsername().equals("SupportAccount")) {
				continue ; 
			}
			if(user.getUserRoles().equalsIgnoreCase("Employee") || user.getUserRoles().equalsIgnoreCase("Admin")) {
				continue ; 
			}
			UserResponse response = new UserResponse();
			response.setActive(user.isActive());
			response.setEmployeeName(user.getEmployeeName());
			response.setId(user.getId());
			response.setUserName(user.getUsername());
			response.setDepartment(user.getDepartment());
			response.setRole(user.getUserRoles());
			users.add(response);
		}
		return users ; 
	}

	
}
