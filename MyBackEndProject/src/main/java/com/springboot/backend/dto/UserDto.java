package com.springboot.backend.dto;

public class UserDto {
	private String name;
	private String accountType;
	private String securityAnswer;
	private String securityQuestion;
	private String encodedCredentials;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public String getSecurityAnswer() {
		return securityAnswer;
	}
	public void setSecurityAnswer(String securityAnswer) {
		this.securityAnswer = securityAnswer;
	}
	public String getSecurityQuestion() {
		return securityQuestion;
	}
	public void setSecurityQuestion(String securityQuestion) {
		this.securityQuestion = securityQuestion;
	}
	public String getEncodedCredentials() {
		return encodedCredentials;
	}
	public void setEncodedCredentials(String encodedCredentials) {
		this.encodedCredentials = encodedCredentials;
	}
	
	
	
	
	
	

}