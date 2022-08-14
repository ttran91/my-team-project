package com.springboot.backend.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.springboot.backend.model.OrderForm;

public interface OrderFormRepository extends JpaRepository<OrderForm, Long>{

	
	
	
	@Transactional
	@Modifying
	@Query("update OrderForm f SET f.cName=?1,f.orderStatus=?2,f.orderCost=?3,f.cPnumber=?4")
	void orderEdit(String getcName, String orderStatus, Double orderCost, Long getcPnumber);
	

}
