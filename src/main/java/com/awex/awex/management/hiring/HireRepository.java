package com.awex.awex.management.hiring;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HireRepository extends JpaRepository<HireModel,Integer>{

}
