package com.zar.hcms.domain;

public class ModificationDTO {
	public static final int ADD_ATTRIBUTE = 1;
	public static final int REPLACE_ATTRIBUTE = 2;
	public static final int REMOVE_ATTRIBUTE = 3;
	private String name;
	private Object[] values;

	private int operation;

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Object[] getValues() {
		return values;
	}
	public void setValues(Object[] values) {
		this.values = values;
	}
	public int getOperation() {
		return operation;
	}
	public void setOperation(int operation) {
		this.operation = operation;
	}

}
