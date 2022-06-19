package com.awex.awex.management.external.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class IbKycForm {    
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int id ; 
    private String name ;

    private String gender ;

    private String idNo ;

    private String passNo ;

    private String nationality ;

    private String address ;

    private String phone ;

    private String mobile ;

    private String socialPhone ;

    private String ex ;

    private String coName ;

    private String businessPhone ;

    private String faxPhone ;

    private String marketingStrategy ;

    private String businessAddress ;

    private String scaleOfCompany ;

    private String numberOfEmployee ;

    private String industry ;

    private String annualIncome ;

    private String natureOfBusiness ;

    private String position ;

    private String mailingAddress ;

    private String timeOfContact ;

    private String currentCompany ;

    private String idealWayOfWorkTogether ;

    private String monthlyIncome ;

    private String emails ;

    private String monthlyTradingScale ;

    private String selfTradingOrAgency ;

    private String mainMarket ;

    private String descro;

    private String descroo;

    private String descrooo;

    private String annualIncomeD ;

    private String property ;

    private String investmentExperience ;

    private String options ;

    private String investmentObjectives ;

    private String sc;

    public String socialName ;

}
