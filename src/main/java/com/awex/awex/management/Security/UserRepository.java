package com.awex.awex.management.Security;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Usersys,Integer>{

	public Usersys findByUsername(String username);

	public Usersys findByEmployeeName(String employeeName);
	
	int countByUsername(String isername);
	
	int countByRepoId(int repoId);
	
	public int countByrepoId(int repoId);
}
