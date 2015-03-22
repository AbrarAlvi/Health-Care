package com.zar.hcms.command;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.zar.hcms.domain.IHCMSDTO;
import com.zar.hcms.entities.HCMSEntity;



public abstract class Command {
	
	HCMSEntity dto;
	Logger logger = LoggerFactory.getLogger(Command.class);

	protected Command(HCMSEntity dto) {
		this.dto =  dto;
	}
	protected abstract void process() throws CommandExecutionException;
	
	public void exucuteCommand() throws CommandExecutionException{
		logger.debug("Command Executing " + dto);
		process();
		logger.debug("Persisting event");
	}
	
	public void exucuteCommandInBackground() throws CommandExecutionException{
		throw new UnsupportedOperationException();
	}

}
