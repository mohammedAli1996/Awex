package com.awex.awex.management.external;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TouchFormRepository extends JpaRepository<TouchForm,Integer>{

}
