package com.zar.hcms.domain;

import java.util.Set;


public class PortalUserDTO {

 String userName;
 String password;
 boolean enabled = false;
 int failedAttempt = 0;
 Set<PortalPrivilege> privileges;
}
