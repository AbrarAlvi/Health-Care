package com.zar.hcms.domain;

import com.zar.hcms.command.EventLog;



public interface IHCMSDTO {
	
	EventLog createLogEvent();
}
