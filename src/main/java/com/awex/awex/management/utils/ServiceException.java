package com.awex.awex.management.utils;

public class ServiceException extends RuntimeException {
    
	private static final long serialVersionUID = 1L;

	public ServiceException() {
    }

    public ServiceException(String s) {
        super(s);
    }
}
