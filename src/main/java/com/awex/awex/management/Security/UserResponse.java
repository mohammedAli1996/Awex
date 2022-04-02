package com.awex.awex.management.Security;


public class UserResponse {

	private int id ; 
	
	private String userName ; 
	
	private String employeeName ;
	
	private String repoName ;
	
	private String role ; 
	
	private boolean active ; 
	
	private String department ;

	public UserResponse() {}
		
	public UserResponse(int id, String userName, String employeeName, String repoName, String role) {
		super();
		this.id = id;
		this.userName = userName;
		this.employeeName = employeeName;
		this.repoName = repoName;
		this.role = role;
	}


	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}


	public String getRepoName() {
		return repoName;
	}


	public void setRepoName(String repoName) {
		this.repoName = repoName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	

}
