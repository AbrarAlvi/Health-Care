package com.zar.hcms.command;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.zar.hcms.domain.ITaxaselaDTO;



public abstract class Command {
	
	ITaxaselaDTO dto;
	Logger logger = LoggerFactory.getLogger(Command.class);

	protected Command(ITaxaselaDTO dto) {
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
