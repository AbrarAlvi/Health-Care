package com.zar.hcms.command;

import com.zar.hcms.domain.ITaxaselaDTO;


public abstract class AlertableCommand extends Command {

	protected AlertableCommand(ITaxaselaDTO dto) {
		super(dto);
	}
	
	protected void persistEvent(EventLog logEvent){
		System.out.println("Persist event");
	}
	
	public void exucuteCommand() throws CommandExecutionException{
		logger.debug("Command Executing " + dto);
		process();
		logger.debug("Persisting event");
		persistEvent(dto.createLogEvent());
	}
	
	public void exucuteCommandInBackground() throws CommandExecutionException{
		throw new UnsupportedOperationException();
	}

}
