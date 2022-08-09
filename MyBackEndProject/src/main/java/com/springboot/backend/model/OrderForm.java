package com.springboot.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OrderForm {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id; 
 	@Column(length = 99, nullable = false)
	private String cName; 
 	
 	@Column(nullable = false)
	private String orderStatus; 
 	
 	@Column(nullable = false)
	private Double orderCost; 
 	
 	@Column(nullable = false)
	private Long cPnumber;

	public OrderForm() {
		super();
		
		
	}

	public OrderForm(Long id, String cName, String orderStatus, Double orderCost, Long cPnumber) {
		super();
		this.id = id;
		this.cName = cName;
		this.orderStatus = orderStatus;
		this.orderCost = orderCost;
		this.cPnumber = cPnumber;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getcName() {
		return cName;
	}

	public void setcName(String cName) {
		this.cName = cName;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public Double getOrderCost() {
		return orderCost;
	}

	public void setOrderCost(Double orderCost) {
		this.orderCost = orderCost;
	}

	public Long getcPnumber() {
		return cPnumber;
	}

	public void setcPnumber(Long cPnumber) {
		this.cPnumber = cPnumber;
	}

	@Override
	public String toString() {
		return "OrderForm [id=" + id + ", cName=" + cName + ", orderStatus=" + orderStatus + ", orderCost=" + orderCost
				+ ", cPnumber=" + cPnumber + "]";
	}
 	
	
 	
 	
 	
 	
 	
 	
 	
}
