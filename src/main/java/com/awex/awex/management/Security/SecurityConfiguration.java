package com.awex.awex.management.Security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	private UserPrincipalDetailsService userPrincipalDetailsService; 
	
	public SecurityConfiguration(UserPrincipalDetailsService userPrincipalDetailsService) {
		this.userPrincipalDetailsService = userPrincipalDetailsService ; 
	}
	
	//data source 
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authenticationProvider());
	}
	
	//authorization //
	@Override
	protected void configure(HttpSecurity http)throws Exception {		
		http 
		.csrf().disable()
		.authorizeRequests()
		.antMatchers("/config/injectuser").permitAll()
		.antMatchers("/vendors/**").permitAll()
		.antMatchers("/users/**").permitAll()
		.antMatchers("/css/**").permitAll()
		.antMatchers("/js/**").permitAll()
		.antMatchers("/images/**").permitAll() 
		.antMatchers("/fonts/**").permitAll()
		.antMatchers("/addHire").permitAll()  
		.antMatchers("/addHire/**").permitAll()  
		.antMatchers("/success").permitAll()  
		.antMatchers("/index").authenticated()  
		
		.antMatchers("/myEmployees").hasAnyAuthority("Accountant Manager","HR Manager","Sales Manager","IT Manager","Call Center Manager","Customer Service Manager")
		
		.antMatchers("/reviewReports").hasAnyAuthority("Admin")
		.antMatchers("/addUser").hasAnyAuthority("Admin")
		.antMatchers("/addUser/**").hasAnyAuthority("Admin")
		.antMatchers("/editUesr").hasAnyAuthority("Admin")
		.antMatchers("/editUesr/**").hasAnyAuthority("Admin")
		.antMatchers("/getUser").hasAnyAuthority("Admin")
		.antMatchers("/getUser/**").hasAnyAuthority("Admin")
		.antMatchers("/active/**").hasAnyAuthority("Admin")
		.antMatchers("/deactive/**").hasAnyAuthority("Admin")
		.antMatchers("/allUsers").hasAnyAuthority("Admin")
		.antMatchers("/allActive").hasAnyAuthority("Admin")
		.antMatchers("/allUsersNN").hasAnyAuthority("Admin")
		.antMatchers("/allNonActive").hasAnyAuthority("Admin")
		
		.antMatchers("/addStaff").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/staffList").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/updateStaff").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/updateStaff/**").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/edtStaff/**").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/getStaff/**").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/terminateStaff/**").hasAnyAuthority("Admin","HR Manager")  
				
		.antMatchers("/addHire").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/allHires").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/updateHire/**").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/allHires").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/filterHiresList").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/getHireView").hasAnyAuthority("Admin","HR Manager")
		.antMatchers("/getHire/**").hasAnyAuthority("Admin","HR Manager")
            
		.and()  
		.authorizeRequests().anyRequest().authenticated()
		.and()
		.exceptionHandling().accessDeniedPage("/forbidden")  
		.and()
		.formLogin().defaultSuccessUrl("/myReports")
		.loginPage("/login").permitAll()
		.and()
		.logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/login").deleteCookies("JSESSIONID");
		
//		 http.requiresChannel()
//         .requestMatchers(r -> r.getHeader("X-Forwarded-Proto") != null)
//         .requiresSecure();
//		 http.cors().and().csrf().disable();
	}
		
	@Bean
	DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider() ;
		daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
		daoAuthenticationProvider.setUserDetailsService(this.userPrincipalDetailsService);
		return daoAuthenticationProvider ; 
	}
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(); 
	}
	
	


}
