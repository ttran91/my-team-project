package com.springboot.backend.dto;

public class UserInfoDto {
	private Long id;
	private String username;
	private String accountType;
	private String name;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String string) {
		this.accountType = string;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	
}