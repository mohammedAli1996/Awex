package com.awex.awex.management.reports;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReportRepository extends JpaRepository<Report,Integer>{

	
	List<Report> findByEmpId(int empId);
	
}
