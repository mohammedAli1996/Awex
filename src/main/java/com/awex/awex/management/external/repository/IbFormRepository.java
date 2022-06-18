package com.awex.awex.management.external.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.awex.awex.management.external.model.IbForm;

@Repository
public interface IbFormRepository extends JpaRepository<IbForm,Integer>{

}
