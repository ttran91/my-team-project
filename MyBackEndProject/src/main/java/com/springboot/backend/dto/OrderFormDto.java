package com.springboot.backend.dto;

import java.util.List;

import com.springboot.backend.model.OrderForm;

public class OrderFormDto {
	
	private Long id;
	private String cName;
	private String orderStatus;
	private Double orderCost;
	private Integer cPnumber;
	private Integer count;
	
	
	
	
	public OrderFormDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public OrderFormDto(Long id, String cName, String orderStatus, Double orderCost, Integer cPnumber, Integer count) {
		super();
		this.id = id;
		this.cName = cName;
		this.orderStatus = orderStatus;
		this.orderCost = orderCost;
		this.cPnumber = cPnumber;
		this.count = count;
	}
	
	public Integer getCount() {
		return count;
	}


	public void setCount(Integer count) {
		this.count = count;
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
	
	
	public Integer getcPnumber() {
		return cPnumber;
	}
	
	
	public Long setcPnumber(Long cPnumber) {
		return cPnumber;
	}


	@Override
	public String toString() {
		return "OrderFormDto [id=" + id + ", cName=" + cName + ", orderStatus=" + orderStatus + ", orderCost="
				+ orderCost + ", cPnumber=" + cPnumber + ", count=" + count + "]";
	}
	
	

	
	
	
	

}
