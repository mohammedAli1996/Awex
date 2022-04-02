package com.awex.awex.management.reports;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.awex.awex.management.Security.MasterService;
import com.awex.awex.management.Security.UserRepository;
import com.awex.awex.management.Security.Usersys;

@Service
public class ReportsService {

	@Autowired
	private ReportRepository reportRepository ; 
	
	
	@Autowired
	private MasterService masterService ; 
	
	public Report addReport(Report request ) {
		Usersys user = masterService.get_current_User();
		request.setEmpName(user.getEmployeeName());
		request.setEmpId(user.getRepoId());
		request.setDepartment(user.getDepartment());
		request.setDate(new Date());
		return reportRepository.save(request);
	}
	
	 
	@Autowired
	private UserRepository userRepository ;
	
	public List<Report> filterReports(Filter filter , boolean myEmployees){
		List<Integer> myEmployeesIds = new ArrayList<Integer>();
		if(myEmployees) {
			List<Usersys> allUsers = userRepository.findAll() ;
			int currentUserId = masterService.get_current_User().getRepoId();
			for(Usersys user : allUsers) {
				if(user.getReportTo() == currentUserId) {
					myEmployeesIds.add(user.getRepoId());
				}   
			}
		}
		List<Report> all = reportRepository.findAll();   
		 
		List<Report> response = new ArrayList<Report>();
		for(Report report : all ) {
			if(filter.getDate() != null ) {
				if(!removeTime(report.getDate()).equals(removeTime(filter.getDate()))) {
					continue ; 
				}
			}
			if(!myEmployees && filter.getDepartment() != null && !filter.getDepartment().equals("")) {
				if(!report.getDepartment().equalsIgnoreCase(filter.getDepartment())) {
					continue ; 
				}
			}
			if( filter.getStaffId() != -1 ) {
				if(report.getEmpId() != filter.getStaffId()) {
					continue ; 
				}
			}  
			if(myEmployees) {
				if(!myEmployeesIds.contains(report.getEmpId())) {
					continue ; 
				}
			}
			response.add(report);
		}
		return response ; 
	}
	
	
	public static Date removeTime(Date date) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.set(Calendar.HOUR_OF_DAY, 0);
        cal.set(Calendar.MINUTE, 0);
        cal.set(Calendar.SECOND, 0);
        cal.set(Calendar.MILLISECOND, 0);
        return cal.getTime();
    }


	public List<Report> getMyReports(Filter filter) {
		List<Report> all = reportRepository.findByEmpId(masterService.get_current_User().getRepoId());   
		List<Report> response = new ArrayList<Report>();
		for(Report report : all ) {
			if(filter.getDate() != null ) {
				if(!removeTime(report.getDate()).equals(removeTime(filter.getDate()))) {
					continue ; 
				}
			}
			response.add(report);
		}
		return response ; 
	}

	
	public Report getReportById(int reportId ) {
		Optional<Report> optional = reportRepository.findById(reportId );
		if(optional.isPresent()) {
			return optional.get(); 
		}
		return null ; 
	}


	public void updateReport(Report request , int reportId ) {
		Report db = getReportById(reportId);
		db
			.setClientName(request.getClientName())
			.setCountry(request.getCountry())
			.setCity(request.getCity())
			.setEmail(request.getEmail())
			.setTelephone(request.getTelephone())
			.setWhatsApp(request.getWhatsApp())
			.setPosition(request.getPosition())
			.setExperience(request.getExperience())
			.setTradingProduct(request.getTradingProduct())
			.setMtfId(request.getMtfId())
			.setCrmId(request.getCrmId())
			.setDepositeAmount(request.getDepositeAmount())
			.setMoreDetails(request.getMoreDetails())
			;
		reportRepository.save(db);
	}
	
}
