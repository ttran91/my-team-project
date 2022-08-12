package com.springboot.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.springboot.backend.model.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Long> {
	
	@Query("select v from Vendor v where v.food.id=?1")
	public List<Vendor> findByFoodId(Long fid);

}
