package com.springboot.backend.enums;

public enum AccountType {
	VENDOR("vendor"), CUSTOMER("customer");
	
	private String accountType;
	
	AccountType(String accountType) {
		this.accountType = accountType;
	}
	
	public String getAccountType() {
		return accountType;
	}
	

}