package com.springboot.backend.dto;

public class OrderDto {
	private Long id;
	private String orderStatus;
	private Double orderCost;
	private Long cid;
	private String cName;
	private String cPhone;
	private String cEmail;
	private Long vid;
	private String vName;
	private String vPhone;
	private String vEmail;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public Long getCid() {
		return cid;
	}
	public void setCid(Long cid) {
		this.cid = cid;
	}
	public String getcName() {
		return cName;
	}
	public void setcName(String cName) {
		this.cName = cName;
	}
	public String getcPhone() {
		return cPhone;
	}
	public void setcPhone(String cPhone) {
		this.cPhone = cPhone;
	}
	public String getcEmail() {
		return cEmail;
	}
	public void setcEmail(String cEmail) {
		this.cEmail = cEmail;
	}
	public Long getVid() {
		return vid;
	}
	public void setVid(Long vid) {
		this.vid = vid;
	}
	public String getvName() {
		return vName;
	}
	public void setvName(String vName) {
		this.vName = vName;
	}
	public String getvPhone() {
		return vPhone;
	}
	public void setvPhone(String vPhone) {
		this.vPhone = vPhone;
	}
	public String getvEmail() {
		return vEmail;
	}
	public void setvEmail(String vEmail) {
		this.vEmail = vEmail;
	}
	
	
}