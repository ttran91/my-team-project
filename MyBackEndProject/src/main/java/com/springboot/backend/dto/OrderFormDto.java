package com.springboot.backend.dto;

public class OrderFormDto {
	
	private Long id;
	private String cName;
	private String orderStatus;
	private Double orderCost;
	private Long cPnumber;
	public OrderFormDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderFormDto(Long id, String cName, String orderStatus, Double orderCost, Long cPnumber) {
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
	
	
	public void setcPnumber(Long long1) {
		this.cPnumber = long1;
	}
	
	
	@Override
	public String toString() {
		return "OrderFormDto [id=" + id + ", cName=" + cName + ", orderStatus=" + orderStatus + ", orderCost="
				+ orderCost + ", cPnumber=" + cPnumber + "]";
	}
	
	
	

}
