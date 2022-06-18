package com.awex.awex.management.external.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.awex.awex.management.external.model.TouchForm;

@Repository
public interface TouchFormRepository extends JpaRepository<TouchForm,Integer>{

}
