package com.springboot.backend.dto;

import java.time.LocalDate;

public class InventoryEditDto {
	private Long id;
	private String foodName;
	private int amountOfStock;
	private LocalDate dateAdded;
	private int maxStock;
	private String outOfStockExp;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFoodName() {
		return foodName;
	}
	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}
	public int getAmountOfStock() {
		return amountOfStock;
	}
	public void setAmountOfStock(int amountOfStock) {
		this.amountOfStock = amountOfStock;
	}
	public LocalDate getDateAdded() {
		return dateAdded;
	}
	public void setDateAdded(LocalDate dateAdded) {
		this.dateAdded = dateAdded;
	}
	public int getMaxStock() {
		return maxStock;
	}
	public void setMaxStock(int maxStock) {
		this.maxStock = maxStock;
	}
	public String getOutOfStockExp() {
		return outOfStockExp;
	}
	public void setOutOfStockExp(String outOfStockExp) {
		this.outOfStockExp = outOfStockExp;
	}
	
	
	
}
